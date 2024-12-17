// Handle register form
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && email && password) {
        // Save data to local storage (just for demo purposes, in real-world apps use backend)
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Registration successful');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Handle login form
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Basic login validation
    if (user && user.username === loginUsername && user.password === loginPassword) {
        alert('Login successful');
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password');
    }
});

// Handle logout
document.getElementById('logoutBtn')?.addEventListener('click', function () {
    alert('Logged out successfully');
    window.location.href = 'login.html';
});
  