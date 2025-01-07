// Seleccionar elementos
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Evento para abrir/cerrar menú
burger.addEventListener('click', () => {
    // Alternar la clase 'active' en los enlaces de navegación
    navLinks.classList.toggle('active');

    // Alternar el ícono de la hamburguesa (opcional para animaciones futuras)
    burger.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces del menú que apuntan a secciones con un ID
    const menuLinks = document.querySelectorAll(".nav-links a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Desplazamiento suave hacia la sección objetivo
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajusta el desplazamiento para compensar la altura del navbar
                    behavior: "smooth"
                });
            }
        });
    });
});

// #####################################################
//###################################################
const images = document.querySelector('.carousel-images');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function updateCarousel(index) {
    images.style.transform = `translateX(-${index * 100}%)`;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
});

// Cambio automático de slides
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
}, 5000);


// #####################################################
//###################################################
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-projects");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Vuelve al último slide
        }
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al primer slide
        }
        updateCarousel();
    });

    // Ajustar el carrusel en caso de cambio de tamaño de ventana
    window.addEventListener("resize", updateCarousel);

    // Inicializar carrusel
    updateCarousel();
});


// #####################################################
//###################################################
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector("footer");

    window.addEventListener("scroll", function () {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition < windowHeight) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }
    });
});

//#####################
document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.2 }
    );

    serviceItems.forEach((item) => observer.observe(item));
});

