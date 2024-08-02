

const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')

//Inicio de sesión
function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse (localStorage.getItem('user'));
    console.log (currentUser.userName)
    console.log (currentUser.userPass)

    console.log (Boolean (username.value === currentUser.userName));
    console.log (Boolean (password.value === currentUser.userPass));
    if(username.value === currentUser.userName && password.value === currentUser.userPass){
        console.log('Felicidades puedes entrar 🔥 ')
        window.location = "./userpage.html"
}else{
    console.log('Sigue intentando')
}

formulario.reset()
}

formulario.addEventListener('submit', validarUsuario)



























/* 
let nombre = 'José'
let items = ['uno','dos','tres','cuatro','cinco']
let pelicula = {
    id: 28,
    nombre: 'La Sociedad de la Nieve',
    year: 2023,
    direccion: 'J. A. Bayona',
    guionistas: ['J. A. Bayona', 'Bernat Vilaplana', 'Jaime Marques', 'Nicolás Casariego'],
    genero: 'Drama',
    image: 'https://images.justwatch.com/poster/310469874/s166/la-sociedad-de-la-nieve.webp'
}

function agregarStorage (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem( key,JSON.stringify(value) )
    }
}

agregarStorage ('nombre', nombre)
agregarStorage ('carrito', items)
agregarStorage ('pelicula', pelicula)

function obtenerDatos(){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse (localStorage.getItem('carrito'))
    let peliculasuario = JSON.parse (localStorage.getItem('pelicula'))

    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach(items => {
        console.log(items)
    });
}

obtenerDatos () 

function borrarItem (items){
    localStorage.removeItem(items)
}
/* borrarItem ('pelicula')
borrarItem ('nombre')
borrarItem ('carrito')
borrarItem ('name') */

/* function borrarTodo (){
    localStorage.clear()
}
borrarTodo () */