document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const gallery1 = document.getElementById('gallery1');
    const gallery2 = document.getElementById('gallery2');
    let currentGallery = gallery1; // Galería visible inicial

    function updateGallery() {
        if (currentGallery === gallery1) {
            galleryContainer.style.transform = 'translateX(0)';
        } else {
            galleryContainer.style.transform = 'translateX(-0%)';
        }
    }

    nextButton.addEventListener('click', function() {
        if (currentGallery === gallery1) {
            gallery1.style.display = 'none';
            gallery2.style.display = 'flex';
            currentGallery = gallery2;
            updateGallery();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentGallery === gallery2) {
            gallery2.style.display = 'none';
            gallery1.style.display = 'flex';
            currentGallery = gallery1;
            updateGallery();
        }
    });

    // Inicializa la galería
    updateGallery();
});
