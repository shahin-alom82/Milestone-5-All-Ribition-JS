document.getElementById('Submit-btn').addEventListener('click', function () {
    // Email Feild
    const userEmail = document.getElementById('user-email');
    const userEmails = userEmail.value;
    // Password Feild
    const UserPassword = document.getElementById('user-password');
    const UserPasswords = UserPassword.value;

    if (userEmails === 'shahin@gmail.com' && UserPasswords === '123456') {
        window.location.href = "bank.html"
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Invalid User",
            text: "Please Write now Email Or Password !",
        });
    }

    userEmail.value = '';
    UserPassword.value = '';

})