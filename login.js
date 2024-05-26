document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.name === name && storedUser.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid name or password.');
    }
    
    document.getElementById('login-form').reset();
});
