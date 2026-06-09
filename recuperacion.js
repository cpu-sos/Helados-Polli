document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    //Obtener valores
    const correo = document.getElementById('correo').value;

    // Validación básica
        alert('Cuenta recuperada. ¡Bienvenido!');
        //Aquí podrías redirigir a otra página:
        window.location.href = "index.html";
    }
  );  