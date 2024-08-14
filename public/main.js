function addTidioChatWidget() {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/jl1qdt03uplvpse85zh7wbizokm3rp3p.js';
    script.async = true;
    document.body.appendChild(script);
}


document.addEventListener('DOMContentLoaded', () => {
    addTidioChatWidget();  // Add Tidio Widget script
    const contentDiv = document.getElementById('content');
    const homeLink = document.getElementById('homeLink');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const dashboardLink = document.getElementById('dashboardLink');
    const logoutLink = document.getElementById('logoutLink');

    const homePageHTML = `
    <div class="container text-white">
    <div class="row">
        <div class="col-xs-8 mx-auto mb-2">
            <h1 class="text-center" style="color: purple;">FEATURED <span class="fw-bold" style="color: purple;">MOVIES</span></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/3b481fe/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fe6%2F89%2F32e3dcde46dcaa78a862f2c32b2c%2Fdigi24-shiftinggears-landscape-772x570-allnew.jpg" class="card-img-top" alt="Shifting Gears">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">Shifting Gears</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/8acc659/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F38%2F9d%2Ff4a904a142b598b8e796af17ac98%2Fdigi24-aneasterbloom-landscape-772x570-allnew.jpg" class="card-img-top" alt="An Easter Bloom">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">An Easter Bloom</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/16f19ba/2147483647/strip/true/crop/2559x1897+1910+536/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F94%2F60%2Fc011eda745738089d5e7aa49b06f%2Fblinddatebookclub-0908-rt-rv1.jpg" class="card-img-top" alt="Blind Date Book Club">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">Blind Date Book Club</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/81e80bd/2147483647/strip/true/crop/4984x3695+280+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F4c%2F1d%2Fbec86c234d83a7785cde6f63e1f7%2Flegendofthelostlocket-0044-rt-2.jpg" class="card-img-top" alt="Legend Of The Love Locket">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">Legend Of The Love Locket</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/0676b8e/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Ff2%2F28%2F7e6876524fbfba6798c9535c10b6%2Fdigi22-hmm-14loveletters-landscape-772x570.jpg" class="card-img-top" alt="14 Love Letters">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">14 Love Letters</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/8b778d6/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fc8%2F27%2Fd4be765b4d1d93c1ad64d66e6e99%2Fdigi23-3bed2bath1ghost-landscape-772x570.jpg" class="card-img-top" alt="3 Bed, 2 Bath, 1 Ghost">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">3 Bed, 2 Bath, 1 Ghost</h5>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container text-white">
    <div class="row">
        <div class="col-xs-8 mx-auto mb-2">
            <h1 class="text-center"></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/936bc3f/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fff%2F88%2Feb3792574fd2a0e628b59876e81e%2Fdigi23-abiltmorechristmas-landscape-772x570.jpg" class="card-img-top" alt="A Biltmore Christmas">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">A Biltmore Christmas</h5>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="https://hallmark.brightspotcdn.com/dims4/default/8014093/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F57%2Fa0%2F1a6defd8f99910c9f0a971fb0889%2Fdigi19-ablueridgemountainchristmas-andscape-772x570.jpg" class="card-img-top" alt="A Blue Ridge Mountain Christmas">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title">A Blue Ridge Mountain Christmas</h5>
                </div>
            </div>
        </div>
        
    </div>
</div>
    `;

    // const registrationFormHTML = `
    //     <h2>Register</h2>
    //     <form id="registerForm">
    //         <div class="mb-3">
    //             <label for="username" class="form-label">Username</label>
    //             <input type="text" class="form-control" id="username" name="username" required>
    //         </div>
    //         <div class="mb-3">
    //             <label for="email" class="form-label">Email</label>
    //             <input type="email" class="form-control" id="email" name="email" required>
    //         </div>
    //         <div class="mb-3">
    //             <label for="password" class="form-label">Password</label>
    //             <input type="password" class="form-control" id="password" name="password" required>
    //         </div>
    //         <button type="submit" class="btn btn-primary">Register</button>
    //     </form>
    // `;


    const registrationFormHTML = `
    <h2>Register</h2>
    <form id="registerForm">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" required>
        </div>
        <div class="mb-3">
            <label for="referralCode" class="form-label">Referral Code (optional)</label>
            <input type="text" class="form-control" id="referralCode" name="referralCode">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
`;


    const loginFormHTML = `
        <h2>Login</h2>
        <form id="loginForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <a href="#" id="forgotPasswordLink">Forgot Password?</a>
    `;

    const depositFormHTML = `
        <h2>Deposit</h2>
        <form id="depositForm">
            <div class="mb-3">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" name="amount" required>
            </div>
            <button type="submit" class="btn text-white" style="background:purple">Deposit</button>
        </form>
        <div id="depositResult" class="mt-3 border border rounded shadow-lg p-3">
            <h3>Deposit Information</h3>
            <p id="totalAmount"></p>
            <p id="totalProfit"></p>
        </div>
    `;

    const forgotPasswordFormHTML = `
        <h2>Forgot Password</h2>
        <form id="forgotPasswordForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <button type="submit" class="btn text-white">Request Password Reset</button>
        </form>
    `;

    const resetPasswordFormHTML = `
        <h2>Reset Password</h2>
        <form id="resetPasswordForm">
            <div class="mb-3">
                <label for="token" class="form-label">Token</label>
                <input type="text" class="form-control" id="token" name="token" required>
            </div>
            <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="newPassword" name="newPassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Reset Password</button>
        </form>
    `;

    const withdrawalFormHTML = `
        <h2>Withdrawal</h2>
        <form id="withdrawalForm">
            <div class="mb-3">
                <label for="withdrawalAmount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="withdrawalAmount" name="withdrawalAmount" required>
            </div>
            <button type="submit" class="btn btn-primary">Withdraw</button>
        </form>
    `;

    const dashboardHTML = `
    <div class="border border rounded shadow-lg p-5">
    <h2 class="fw-bold mb-2">Dashboard</h2>
    <ul class="nav nav-tabs" style="color:primary" id="dashboardTabs" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" style="color:purple" id="deposit-tab" data-bs-toggle="tab" href="#deposit" role="tab">Deposit</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style="color:purple" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab">Our Membership Card</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style="color:purple" id="withdrawal-tab" data-bs-toggle="tab" href="#withdrawal" role="tab">Withdrawal</a>
        </li>
    </ul>
    <div class="tab-content mt-3">
        <div class="tab-pane fade show active" id="deposit" role="tabpanel">
            ${depositFormHTML}
            </div>
            <div class="tab-pane mt-4 fade text-center" id="profile" role="tabpanel">
                <h3>Referral Information</h3>
                <p id="referralCode">Referral Code: <span></span></p>
                <p id="referralPoints">Referral Points: <span></span></p>
                <img src="hallm.png" alt="Profile Image" class="w-75">
            </div>
            <div class=" mt-5 border border rounded shadow-lg p-2">
                <div class="card text-center">
                    <div class="card-body border border-none">
                        <h5 class="card-title">Investment Plan</h5>
                        <p class='fw-bold'>30% ROI</p>
                        <p class="card-text fw-bold">Click the button below to copy the Bitcoin Wallet Address</p>
                        <button class="btn text-white" style="background:purple" data-bs-toggle="modal" data-bs-target="#copyModal">Get Wallet Address</button>
                        <h6 class="mt-4 fs-italic">N/B: Please Ensure to notify the admin once you have done a transfer to the wallet address.
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="copyModal" tabindex="-1" aria-labelledby="copyModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="copyModalLabel">Make payment to the bitcoin address below</h5>
                            <button type="button" class="btn-close text-white" style="puple" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p id="text-to-copy">1KM4uR9zvNky5uicH2HwYAJ7tr6cUD2PzE</p>
                            <button class="btn text-white" style="background:purple" id="copy-button" data-clipboard-target="#text-to-copy">Copy Address</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="tab-pane mt-4 fade text-center" id="profile" role="tabpanel">
            <h3></h3>
            <img src="hallm.png" alt="Profile Image" class="w-75">
            
        </div>
        <div class="tab-pane fade" id="settings" role="tabpanel">
            <h3>Settings</h3>
            <p>Settings and preferences go here.</p>
        </div>
        <div class="tab-pane fade" id="withdrawal" role="tabpanel">
        ${withdrawalFormHTML}
    </div>
    </div>
    </div>
    `;

    

 

    const showHomePage = () => {
        contentDiv.innerHTML = homePageHTML;
    };

    const showRegistrationForm = () => {
        contentDiv.innerHTML = registrationFormHTML;
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            };

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert('Registration successful');
                    showLoginForm();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error);
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('Registration failed');
            }
        });
    };


    // Function to fetch and display user data including referral info
const loadUserData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/user', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
            const user = await response.json();
            document.querySelector('#referralCode span').textContent = user.referralCode;
            document.querySelector('#referralPoints span').textContent = user.referralPoints;
        } else {
            console.error('Error fetching user data');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

// Call loadUserData after dashboard is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/dashboard') {
        loadUserData();
    }
});


    const showLoginForm = () => {
        contentDiv.innerHTML = loginFormHTML;
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                email: e.target.email.value,
                password: e.target.password.value,
            };

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token); // Store JWT
                    alert('Login successful');
                    updateNavbar(true);
                    showDashboard();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed');
            }
        });

        document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
            e.preventDefault();
            showForgotPasswordForm();
        });
    };

    const showDashboard = () => {
        contentDiv.innerHTML = dashboardHTML;
        fetchDepositInfo();
        setupDashboardTabs();

        // Initialize ClipboardJS
        const clipboard = new ClipboardJS('#copy-button');

        // Display message when copy is successful
        clipboard.on('success', () => {
            alert('Text copied to clipboard!');
        });

        // Handle copy error
        clipboard.on('error', () => {
            alert('Failed to Copy Address.');
        });
    };


    const setupDashboardTabs = () => {
        document.querySelectorAll('#dashboardTabs a').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                new bootstrap.Tab(tab).show();
            });
        });

        document.getElementById('depositForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = { amount: e.target.amount.value };

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/api/deposit', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': token ? `Bearer ${token}` : '' // Send JWT
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Deposit successful');
                    fetchDepositInfo();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error);
                }
            } catch (error) {
                console.error('Error during deposit:', error);
                alert('Deposit failed');
            }
        });

        document.getElementById('withdrawalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = e.target.withdrawalAmount.value;
            alert(`You have requested to withdraw $${amount}. Please contact the admin for further assistance.`);

            // Clear the form
            e.target.reset();

        });
    };

    const fetchDepositInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/deposit', {
                headers: {
                    'Authorization': token ? `Bearer ${token}` : '' // Send JWT
                }
            });

            if (response.ok) {
                const data = await response.json();
                document.getElementById('totalAmount').textContent = `Total Amount: $${data.amount}`;
                document.getElementById('totalProfit').textContent = `Total Profit: $${data.profitBalance}`;
            } else {
                const errorData = await response.json();
                alert(errorData.error);
            }
        } catch (error) {
            console.error('Error fetching deposit info:', error);
            alert('Failed to fetch deposit info');
        }
    };

    const showForgotPasswordForm = () => {
        contentDiv.innerHTML = forgotPasswordFormHTML;
        document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = { email: e.target.email.value };

            try {
                const response = await fetch('/api/request-password-reset', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert('Password reset token sent to your email');
                    showResetPasswordForm();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error);
                }
            } catch (error) {
                console.error('Error requesting password reset:', error);
                alert('Password reset request failed');
            }
        });
    };

    const showResetPasswordForm = () => {
        contentDiv.innerHTML = resetPasswordFormHTML;
        document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                token: e.target.token.value,
                newPassword: e.target.newPassword.value,
            };

            try {
                const response = await fetch('/api/reset-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert('Password reset successful');
                    showLoginForm();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error);
                }
            } catch (error) {
                console.error('Error during password reset:', error);
                alert('Password reset failed');
            }
        });
    };

    const updateNavbar = (isAuthenticated) => {
        homeLink.classList.toggle('hidden', isAuthenticated);
        registerLink.classList.toggle('hidden', isAuthenticated);
        loginLink.classList.toggle('hidden', isAuthenticated);
        dashboardLink.classList.toggle('hidden', !isAuthenticated);
        logoutLink.classList.toggle('hidden', !isAuthenticated);
    };

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        showRegistrationForm();
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    dashboardLink.addEventListener('click', (e) => {
        e.preventDefault();
        showDashboard();
    });

    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('token'); // Remove JWT
        updateNavbar(false);
        showHomePage();
    });

    // Initial UI setup based on authentication status
    const token = localStorage.getItem('token');
    if (token) {
        updateNavbar(true);
        showDashboard();
    } else {
        updateNavbar(false);
        showHomePage();
    }
});














