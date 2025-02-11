document.addEventListener("DOMContentLoaded", function () {
    /** ================================
     * ✅ Cargar Navbar Dinámicamente
     * ================================ */
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

    /** ================================
     * ✅ Configurar comportamiento de la Navbar
     * ================================ */
    function setupNavbarBehavior() {
        let lastScrollTop = 0;
        const navbar = document.getElementById("navbar");

        if (!navbar) return;

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop === 0) {
                // Si el usuario está en la parte superior, siempre mostrar la navbar
                navbar.style.transform = "translateY(0)";
            } else if (scrollTop > lastScrollTop) {
                // Si el usuario hace scroll hacia abajo, ocultar la navbar
                navbar.style.transform = "translateY(-100%)";
            } else {
                // Si el usuario hace scroll hacia arriba, mostrar la navbar
                navbar.style.transform = "translateY(0)";
            }

            lastScrollTop = scrollTop;
        });
    }

    /** ================================
     * ✅ Configurar Menú Móvil
     * ================================ */
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

    /** ================================
     * ✅ Cargar Footer Dinámicamente
     * ================================ */
    const footerContainer = document.getElementById("footer-container");

    if (footerContainer) {
        fetch("components/footer.html")
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => console.error("Error cargando el footer:", error));
    }

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
});

