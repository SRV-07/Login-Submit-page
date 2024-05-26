document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;
    
    const userData = {
        name: name,
        password: password,
        email: email,
        phone: phone,
        profession: profession
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup successful! Data saved locally.');
    
    document.getElementById('signup-form').reset();
});
