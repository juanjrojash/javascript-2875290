const container = document.querySelector('.container');
const inicio = document.querySelector('#inicio');

modulos.forEach(element => {

    if(element.id == 4){
        let ingreso = document.createElement('div')
        let principal = document.createElement('div')
        let card = document.createElement('div')

principal.innerHTML = `
<img src"${element.img}
<h2>${element.nombre}
`

card.innerHTML = `
<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre">${element.nombre1}
        <p class= "text">${element.descripcion1}
    </div>
</div>

<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre"${element.nombre2}
        <p class= "text">${element.descripcion2}
    </div>
</div>

<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre"${element.nombre3}
        <p class= "text">${element.descripcion3}
    </div>
</div>

<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre"${element.nombre4}
        <p class= "text">${element.descripcion4}
    </div>
</div>

<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre"${element.nombre5}
        <p class= "text">${element.descripcion5}
    </div>
</div>

<div class= "card">
    <div class = "card-header">
        <img src"${element.img}
    </div>
    <div class = "card-body">
        <h1 class= "nombre"${element.nombre6}
        <p class= "text">${element.descripcion6}
    </div>
</div>

`
inicio.appendChild(principal)
container.appendChild(card)
}
})