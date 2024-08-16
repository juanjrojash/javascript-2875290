const container = document.querySelector ('.container')
const buscador = document.querySelector("#buscador")
const textobusqueda = document.querySelector("#textobusqueda")
const listaStatus = document.querySelector("#listaStatus")
let results;

function mostrarResults(results) {
    results.forEach(element => {
        let card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
            <div class="card">
                <img src="${element.image}" alt="Imagen de la tarjeta" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${element.nombre}</h2>
                    <p class="card-description">
                        Año: ${element.year} <br>
                        Dirección: '${element.direccion}' <br>
                        Guionistas: '${element.guionistas}'<br>
                        Género: '${element.genero}'</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

mostrarResults(peliculas);

function filtrar(e) {
    e.preventDefault();
    container.innerHTML = "";

    let filtro = peliculas;

    if(listaStatus.value !== "todas") {
        filtro = filtro.filter(pelicula => pelicula.genero.toLowerCase() === listaStatus.value);
    }

    if(textobusqueda.value) {
        filtro = filtro.filter(pelicula => pelicula.nombre.toLowerCase().includes(textobusqueda.value.toLowerCase()));
    }

    mostrarResults(filtro);
}

buscador.addEventListener('submit', filtrar);