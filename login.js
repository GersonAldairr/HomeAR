// Mostrar u ocultar contraseña
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        toggle.classList.replace("fa-eye-slash", "fa-eye");
    }

});

// Validación del login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error-message");

    // Usuario de prueba
    const usuario = "admin@homear.pe";
    const contraseña = "123456";

    if (email === usuario && pass === contraseña) {

        error.style.color = "#27c18f";
        error.textContent = "Inicio de sesión correcto.";

        // Redirige a la siguiente página
        window.location.href = "home.html";

    } else {

        error.style.color = "#e53935";
        error.textContent = "Correo o contraseña inválidos.";

    }

});