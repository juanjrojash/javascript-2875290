document.getElementById('startAnimations').addEventListener('click', function() {
    const animElements = document.querySelectorAll('.nube, .estrella, .goku, .piccolo, .roshi, .esfera');

    animElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
});