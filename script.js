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