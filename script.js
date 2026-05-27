function filtrarTrabajos() {
  const texto = document.getElementById("busqueda").value.toLowerCase();
  const trabajos = document.querySelectorAll(".trabajo");

  trabajos.forEach(trabajo => {
    const categoria = trabajo.dataset.categoria.toLowerCase();
    const contenido = trabajo.innerText.toLowerCase();

    if (categoria.includes(texto) || contenido.includes(texto)) {
      trabajo.style.display = "block";
    } else {
      trabajo.style.display = "none";
    }
  });
}

let slideActual = 0;

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    mostrarSlide(index);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function mostrarSlide(index) {
  slides[slideActual].classList.remove("active");
  dots[slideActual].classList.remove("active");

  slideActual = index;

  slides[slideActual].classList.add("active");
  dots[slideActual].classList.add("active");
}

function moverSlide(direccion) {
  let nuevoIndex = slideActual + direccion;

  if (nuevoIndex < 0) {
    nuevoIndex = slides.length - 1;
  }

  if (nuevoIndex >= slides.length) {
    nuevoIndex = 0;
  }

  mostrarSlide(nuevoIndex);
}

setInterval(() => {
  moverSlide(1);
}, 5000);

function abrirModal(src) {
  const modal = document.getElementById("modalImagen");
  const imagen = document.getElementById("imagenModal");

  imagen.src = src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalImagen").style.display = "none";
}
