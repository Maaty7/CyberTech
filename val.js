document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Limpiar mensajes de error previos
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    
    // Obtener valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;

    // Validación de correo electrónico para dominios específicos
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Por favor, ingrese un correo electrónico válido (gmail.com, hotmail.com, outlook.com, yahoo.com).';
        isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 8 || password.length > 15) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener entre 8 y 15 caracteres.';
        isValid = false;
    }

    // Validación de la confirmación de contraseña
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    // Si todas las validaciones pasan, se puede enviar el formulario
    if (isValid) {
        // Aquí puedes enviar el formulario, por ejemplo usando AJAX
        alert('Formulario enviado exitosamente');
        // Enviar el formulario (opcional: puedes reemplazar con AJAX)
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Limpiar mensajes de error previos
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    
    // Obtener valores de los campos
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    let isValid = true;

    // Validación de correo electrónico para dominios específicos
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Por favor, ingrese un correo electrónico válido (gmail.com, hotmail.com, outlook.com, yahoo.com).';
        isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 8 || password.length > 15) {
        document.getElementById('loginPasswordError').textContent = 'La contraseña debe tener entre 8 y 15 caracteres.';
        isValid = false;
    }

    if (isValid) {
        alert('Inicio de sesión exitoso');
    }
});

function showRegisterForm() {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('register-container').classList.add('active');
}

function showLoginForm() {
    document.getElementById('register-container').classList.remove('active');
    document.getElementById('login-container').classList.add('active');
}