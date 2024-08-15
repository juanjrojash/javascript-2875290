const container = document.querySelector(".container")
const  buscador = document.querySelector("#buscador")
const  textobusqueda = document.querySelector("#textobusqueda")
const  listaStatus = document.querySelector("#listaStatus")
let results;
let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(response => response.json())
.then(data => {

    results = data.results; 

    mostrarResults(data.results)

});
function pintar (elemento){

    switch(elemento){
        case 'Alive':
            return 'green'
        break
        case 'Dead':
            return 'red'
        break
        default:
            return 'gray'
    
    }
}

function mostrarResults (result){
result.forEach(element => {

    const card = document.createElement('div')
    card.classList.add("card");
    container.appendChild(card)

    card.innerHTML = ` 
        <img src="${element.image}" width= "200px">
        <div class="info">
        <h1>${element.name}</h1>
        <div class="section">
        <div class="circle ${pintar(element.status)}"></div>
        <span class="estado">${element.status} - ${element.species} </span>
        </div>
        <div class="detalle">
            <p><strong>Última ubicación conocida:</strong><br>${element.location.name}</p>
            <p><strong>Visto por primera vez en:</strong><br>${element.origin.name}</p>
        </div>
    </div>
    </div>
    `
    container.appendChild(card)
});
}

function filtrar(e) {
    
    e.preventDefault()

container.innerHTML = ""

if(listaStatus.value != "all"){
    const filtro = results.filter(word => word.status == listaStatus.value).filter( word =>  word.name.toLowerCase().includes(textobusqueda.value.toLowerCase()) );
        //textobusqueda.value.toLowerCase() == word.name.toLowerCase()

    console.log(filtro)
    
    mostrarResults(filtro)
}else{
    if(textobusqueda.value){

    const filtro = results.filter( word =>  word.name.toLowerCase().includes(textobusqueda.value.toLowerCase()) );
    mostrarResults(filtro)

}else{
    mostrarResults(results)
}
textobusqueda.value = ""
}
}

buscador.addEventListener('submit', filtrar)


