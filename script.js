let mensajes = [
    "¡Tu es lux mea, vita mea, amor meus! 😻",
    "¡Cum te, felicitas mea est perfecta! ✨",
    "¡Te amo plus quam verbis exprimere possum! 💚",
    "¡Semper in corde meo eris! 💖",
    "¡Tu sola es mihi universum! 😍"
];

let indiceMensaje = 0;
let musica = document.getElementById("musica");

// Reproducir música cuando el usuario haga clic en cualquier parte
document.addEventListener("DOMContentLoaded", function () {
    function iniciarMusica() {
        musica.play()
            .then(() => console.log("Música reproduciéndose"))
            .catch(error => console.log("Reproducción bloqueada:", error));

        document.removeEventListener("click", iniciarMusica);
    }

    // Agregar evento para iniciar la música solo en el primer clic
    document.addEventListener("click", iniciarMusica);
});

// Cambiar mensajes automáticamente
function cambiarMensaje() {
    let mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.style.opacity = 0; 

    setTimeout(() => {
        mensajeElemento.innerText = mensajes[indiceMensaje];
        mensajeElemento.style.opacity = 1; 
        indiceMensaje++;

        if (indiceMensaje >= mensajes.length) {
            indiceMensaje = 0;
        }
    }, 500);
}

// Iniciar el cambio de mensajes automáticamente
setInterval(cambiarMensaje, 6000);

// Galería de imágenes con botones
let imagenes = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg"];
let indice = 0;

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice < 0) indice = imagenes.length - 1;
    if (indice >= imagenes.length) indice = 0;

    let imagen = document.getElementById("imagen-principal");
    imagen.src = imagenes[indice];

    // Mostrar el botón de la carta solo en la segunda imagen
    let botonCarta = document.getElementById("boton-carta");
    botonCarta.style.display = (indice === 1) ? "inline-block" : "none";
}

// Función para mostrar la carta sorpresa
function mostrarCarta() {
    document.getElementById("carta").style.display = "block";
}

// Iniciar corazones flotantes al cargar la página
window.onload = function() {
    cambiarMensaje();
    crearCorazones();
};

// Función para generar corazones flotando
function crearCorazones() {
    setInterval(() => {
        let corazon = document.createElement("div");
        corazon.innerHTML = "💚"; // Corazones verdes
        corazon.classList.add("corazon");
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }, 500);
}
