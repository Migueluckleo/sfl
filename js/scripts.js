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

document.addEventListener("DOMContentLoaded", function () {
    /** ✅ Cargar el componente rabon2 dinámicamente */
    const rabon2Container = document.getElementById("rabon2-container");

    if (rabon2Container) {
        fetch("components/rabon2.html")
            .then(response => response.text())
            .then(html => {
                rabon2Container.innerHTML = html;
            })
            .catch(error => console.error("Error cargando el componente Rabon 2:", error));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    /** ✅ Cargar el componente Rabon 1 dinámicamente */
    const rabon1Container = document.getElementById("rabon1-container");

    if (rabon1Container) {
        fetch("components/rabon1.html")
            .then(response => response.text())
            .then(html => {
                rabon1Container.innerHTML = html;
            })
            .catch(error => console.error("Error cargando el componente Rabon 1:", error));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    /** ✅ Cargar el componente camioneta dinámicamente */
    const camionetaContainer = document.getElementById("camioneta-container");

    if (camionetaContainer) {
        fetch("components/camioneta.html")
            .then(response => response.text())
            .then(html => {
                camionetaContainer.innerHTML = html;
            })
            .catch(error => console.error("Error cargando el componente camioneta:", error));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    /** ✅ Cargar el componente torton dinámicamente */
    const tortonContainer = document.getElementById("torton-container");

    if (tortonContainer) {
        fetch("components/torton.html")
            .then(response => response.text())
            .then(html => {
                tortonContainer.innerHTML = html;
            })
            .catch(error => console.error("Error cargando el componente camioneta:", error));
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const rabon1Container = document.getElementById("rabon1-container");

    if (rabon1Container) {
        fetch("components/rabon1.html")
            .then(response => response.text())
            .then(html => {
                rabon1Container.innerHTML = html;

                // ✅ Ahora inicializa Splide después de que el componente cargue
                setTimeout(() => {
                    const sliderElement = document.querySelector("#slider1");
                    
                    if (!sliderElement) {
                        console.error("🚨 Error: No se encontró el carrusel después de cargar `rabon1.html`.");
                        return;
                    }

                    new Splide("#slider1", {
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        interval: 5000,
                        arrows: true,
                        pagination: true,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }).mount();
                }, 100); // Espera un poco para asegurarte de que se cargó el DOM
            })
            .catch(error => console.error("Error cargando el componente rabon1:", error));
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const rabon2Container = document.getElementById("rabon2-container");

    if (rabon2Container) {
        fetch("components/rabon2.html")
            .then(response => response.text())
            .then(html => {
                rabon2Container.innerHTML = html;

                // ✅ Ahora inicializa Splide después de que el componente cargue
                setTimeout(() => {
                    const sliderElement = document.querySelector("#slider2");
                    
                    if (!sliderElement) {
                        console.error("🚨 Error: No se encontró el carrusel después de cargar `rabon1.html`.");
                        return;
                    }

                    new Splide("#slider2", {
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        interval: 5000,
                        arrows: true,
                        pagination: true,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }).mount();
                }, 100); // Espera un poco para asegurarte de que se cargó el DOM
            })
            .catch(error => console.error("Error cargando el componente rabon1:", error));
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const camionetaContainer = document.getElementById("camioneta-container");

    if (camionetaContainer) {
        fetch("components/camioneta.html")
            .then(response => response.text())
            .then(html => {
                camionetaContainer.innerHTML = html;

                // ✅ Ahora inicializa Splide después de que el componente cargue
                setTimeout(() => {
                    const sliderElement = document.querySelector("#slider3");
                    
                    if (!sliderElement) {
                        console.error("🚨 Error: No se encontró el carrusel después de cargar `rabon2.html`.");
                        return;
                    }

                    new Splide("#slider3", {
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        interval: 5000,
                        arrows: true,
                        pagination: true,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }).mount();
                }, 100); // Espera un poco para asegurarte de que se cargó el DOM
            })
            .catch(error => console.error("Error cargando el componente camioneta.html:", error));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tortonContainer = document.getElementById("torton-container");

    if (tortonContainer) {
        fetch("components/torton.html")
            .then(response => response.text())
            .then(html => {
                tortonContainer.innerHTML = html;

                // ✅ Ahora inicializa Splide después de que el componente cargue
                setTimeout(() => {
                    const sliderElement = document.querySelector("#slider4");
                    
                    if (!sliderElement) {
                        console.error("🚨 Error: No se encontró el carrusel después de cargar `torton.html`.");
                        return;
                    }

                    new Splide("#slider4", {
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        interval: 5000,
                        arrows: true,
                        pagination: true,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }).mount();
                }, 100); // Espera un poco para asegurarte de que se cargó el DOM
            })
            .catch(error => console.error("Error cargando el componente camioneta.html:", error));
    }
});



document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".icon");

        // Alternar visibilidad
        content.classList.toggle("hidden");

        // Cambiar el icono de la flecha
        icon.classList.toggle("ri-arrow-drop-down-fill");
        icon.classList.toggle("ri-arrow-drop-up-fill");
    });
});