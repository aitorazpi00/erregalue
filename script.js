let index = 0;

function cambiarImagen(n) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    index += n;

    if (index >= imagenes.length) {
        index = 0; // Regresa al inicio si llega al final
    } else if (index < 0) {
        index = imagenes.length - 1; // Regresa al final si va al inicio
    }

    const desplazamiento = -index * 100; // Calcula el desplazamiento
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${desplazamiento}%)`;
}

// Opcional: cambia automáticamente las imágenes cada 5 segundos
// setInterval(() => cambiarImagen(1), 5000);