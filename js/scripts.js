document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.createElement("div");
    navbarContainer.id = "navbar-container";
    document.body.prepend(navbarContainer); // Agrega el contenedor antes del contenido principal

    fetch("components/navbar.html")
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html;
            setupNavbarBehavior(); // Activa el comportamiento de ocultar/mostrar la navbar
            setupMobileMenu(); // Activa el menú móvil después de cargar la navbar
        })
        .catch(error => console.error("Error cargando la navbar:", error));

    function setupNavbarBehavior() {
        let lastScrollTop = 0;
        const navbar = document.getElementById("navbar");

        if (!navbar) return;

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                navbar.style.transform = "translateY(-100%)"; // Oculta la navbar
            } else {
                navbar.style.transform = "translateY(0)"; // Muestra la navbar
            }

            lastScrollTop = scrollTop;
        });
    }

    function setupMobileMenu() {
        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        if (!menuToggle || !mobileMenu) return; // Evita errores si no existen los elementos

        // Evento para abrir/cerrar el menú móvil
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });

        // Cierra el menú al hacer clic en un enlace
        document.querySelectorAll("#mobileMenu a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
            });
        });
    }
});
    /** ================================
     * ✅ Animación de Contadores
     * ================================ */
    const counters = document.querySelectorAll(".counter");
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            let target = parseInt(counter.dataset.target, 10);
            let count = 0, increment = target / 100;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + (counter.dataset.suffix || "");
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target + (counter.dataset.suffix || "");
                }
            };
            updateCount();
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    /** ================================
     * ✅ Animación Carrusel de Logos
     * ================================ */
    const carousel = document.querySelector(".logos-carousel");
    if (carousel) {
        carousel.addEventListener("mouseenter", () => carousel.style.animationPlayState = "paused");
        carousel.addEventListener("mouseleave", () => carousel.style.animationPlayState = "running");
    }
    document.addEventListener("DOMContentLoaded", function () {
        // Cargar el footer dinámicamente
        const footerContainer = document.getElementById("footer-container");
    
        if (footerContainer) {
            fetch("components/footer.html")
                .then(response => response.text())
                .then(html => {
                    footerContainer.innerHTML = html;
                })
                .catch(error => console.error("Error cargando el footer:", error));
        }
    });
    