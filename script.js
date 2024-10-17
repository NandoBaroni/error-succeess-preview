document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values of email and password fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    // Clear previous classes to ensure only one class is added
    messageDiv.classList.remove('success', 'error');

    if (email === '' || password === '') {
        // Display error message if either field is empty
        messageDiv.textContent = 'ERROR: you have to insert both an e-mail and a password.';
        messageDiv.classList.add('error');
        messageDiv.style.display = 'block';  // Ensure the message div is visible
    } else {
        // Display success message if both fields have values
        messageDiv.textContent = 'SUCCESS: registration complete.';
        messageDiv.classList.add('success');
        messageDiv.style.display = 'block';  // Ensure the message div is visible
    }
});
