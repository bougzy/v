const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');
const dns = require('dns')

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'CGlsHvHtd9';

dns.setServers(['8.8.8.8', '8.8.4.4']);  // Using Google's public DNS servers

const options = {
    serverSelectionTimeoutMS: 30000,  // Increase the server selection timeout
  };

// MongoDB connection
mongoose.connect('mongodb+srv://leap:leap@leap.zqvjh6k.mongodb.net/leap', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// User schema and model
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     amount: { type: Number, default: 0 },
//     profitBalance: { type: Number, default: 0 }
// });


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    amount: { type: Number, default: 0 },
    profitBalance: { type: Number, default: 0 },
    referralPoints: { type: Number, default: 0 },
    referredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    referralCode: { type: String, unique: true }
});

// Generate a unique referral code before saving
userSchema.pre('save', function(next) {
    if (!this.referralCode) {
        this.referralCode = Math.random().toString(36).substring(2, 8) + this._id;
    }
    next();
});

userSchema.methods.deposit = function(amount) {
    this.amount += amount;
    // Add logic to update profit balance if needed
};

const User = mongoose.model('User', userSchema);

// Deposit schema and model
const depositSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    profitBalance: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
});

const Deposit = mongoose.model('Deposit', depositSchema);

app.use(express.json());
app.use(cors({
    origin: 'https://your-client-app-domain.com', // Update with your client's domain
    credentials: true
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware to protect routes
const requireAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1]; // Split "Bearer <token>" to get the token
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.userId = decoded.userId;
        next();
    });
};

// Registration endpoint
// app.post('/api/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ username, email, password: hashedPassword });
//         await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error during registration:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

app.post('/api/register', async (req, res) => {
    const { username, email, password, referralCode } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        if (referralCode) {
            const referrer = await User.findOne({ referralCode });
            if (referrer) {
                referrer.referredUsers.push(user._id);
                referrer.referralPoints += 10;
                await referrer.save();
            }
        }
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Login endpoint
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Middleware to check if a user is qualifies for bonus after reffering five users
const checkReferralBonus = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (user.referredUsers.length >= 5 && user.referralPoints >= 50) {
            // Assuming the bonus is 50 points, adjust as needed
            user.referralPoints += 50;  // Add bonus points
            await user.save();
        }
        next();
    } catch (error) {
        console.error('Error checking referral bonus:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


app.get('/api/user', requireAuth, checkReferralBonus, async (req, res) => {
    try {
        const user = await User.findById(req.userId, 'username email referralPoints referralCode referredUsers');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Deposit endpoint
app.post('/api/deposit', requireAuth, async (req, res) => {
    const { amount } = req.body;
    try {
        const deposit = new Deposit({ userId: req.userId, amount });
        await deposit.save();
        
        const latestDeposit = await Deposit.findOne({ userId: req.userId }).sort({ timestamp: -1 });
        if (latestDeposit) {
            const secondsPassed = Math.floor((Date.now() - latestDeposit.timestamp) / 1000);
            const profitEarned = latestDeposit.amount * (Math.pow(1.3, secondsPassed / (24 * 60 * 60)) - 1);
            const profitBalance = latestDeposit.profitBalance + profitEarned;
            res.status(201).json({ message: 'Deposit saved successfully', amount: latestDeposit.amount, profitBalance });
        } else {
            res.status(201).json({ message: 'Deposit saved successfully', amount: 0, profitBalance: 0 });
        }
    } catch (error) {
        console.error('Error during deposit:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get deposit info endpoint
app.get('/api/deposit', requireAuth, async (req, res) => {
    try {
        const latestDeposit = await Deposit.findOne({ userId: req.userId }).sort({ timestamp: -1 });
        if (latestDeposit) {
            const secondsPassed = Math.floor((Date.now() - latestDeposit.timestamp) / 1000);
            const profitEarned = latestDeposit.amount * (Math.pow(1.3, secondsPassed / (24 * 60 * 60)) - 1);
            const profitBalance = latestDeposit.profitBalance + profitEarned;
            res.json({ amount: latestDeposit.amount, profitBalance });
        } else {
            res.json({ amount: 0, profitBalance: 0 });
        }
    } catch (error) {
        console.error('Error fetching deposit:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get user information if authenticated
app.get('/api/user', requireAuth, async (req, res) => {
    try {
        const user = await User.findById(req.userId, 'username email');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
