const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');

console.log(solGuia)

function moverSol(){
    sol.style.animationDuration = "15s"
    sol.style.animationIterationCount = "infinite"
    sol.style.animationName = "mover"
    sol.style.animationDelay = ".2s"
    solGuia.style.animationDuration = "15s"
    solGuia.style.animationIterationCount = "infinite"
    solGuia.style.animationName = "mover"
    solGuia.style.animationDelay = ".2s"
    console.log('Ejecutando')
}
solGuia.addEventListener('click', moverSol);
