document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el año actual y lo asigna al elemento con el id "currentYear"
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    var btnSubir = document.getElementById("btnSubir");
    var btnBajar = document.getElementById("btnBajar");

    // Mostrar el botón de subir cuando el usuario ha bajado 300px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnSubir.style.display = "flex";
            btnBajar.style.display = "none";  // Oculta el botón de bajar al subir
        } else {
            btnSubir.style.display = "none";
            btnBajar.style.display = "flex"; // Muestra el botón de bajar cuando el usuario está arriba
        }
    });

    // Hacer scroll al inicio suavemente cuando se hace clic en el botón de subir
    btnSubir.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Hacer scroll hacia la sección de "¿Quién soy?" cuando se hace clic en el botón de bajar
    btnBajar.addEventListener("click", function () {
        var sectionQuienSoy = document.getElementById("quienSoy");
        sectionQuienSoy.scrollIntoView({ behavior: "smooth" });
    });
});
