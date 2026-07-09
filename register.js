const btn = document.getElementById("btnCrear");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("mensajeError");

    // Expresión regular para validar correo
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nombre === ""){
        error.textContent = "Ingrese su nombre.";
        return;
    }

    if(!correoValido.test(correo)){
        error.textContent = "Ingrese un correo electrónico válido.";
        return;
    }

    if(password.length < 8){
        error.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    error.textContent = "";

    window.location.href = "verification.html";

});