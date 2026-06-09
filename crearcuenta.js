document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    //Obtener valores
    const correo = document.getElementById('correo').value;
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Validación básica
        alert('Registro exitoso. ¡Bienvenido!');
        //Aquí podrías redirigir a otra página:
        window.location.href = "index.html";
    }
  );  