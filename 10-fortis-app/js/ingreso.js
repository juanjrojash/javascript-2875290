const formulario = document.querySelector('.user-form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

// Inicio de sesión
function validarUsuario(e) {
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem('user'));
    
    if (currentUser && username.value === currentUser.userName && password.value === currentUser.userPass) {
        console.log('Felicidades, puedes entrar 🔥');
        window.location = "../index.html";
    } else {
        console.log('Sigue intentando');
    }

    formulario.reset();
}

formulario.addEventListener('submit', validarUsuario);