class FotoMiniatura {
  constructor(source) {
    this.source = source;
  }
  crearImagen() {
    const imagen = document.createElement("img");
    imagen.src = this.source;
    return imagen;
  }
  crearImagenConListener() {
    const imagen = this.crearImagen();
    imagen.addEventListener("click", this.clickImagen);
    return imagen;
  }
  clickImagen(event) {
    const fotoMiniatura = new FotoMiniatura(event.currentTarget.src);
    const imagen = fotoMiniatura.crearImagen();
    document.body.classList.add("no-scroll");
    const fotoModal = new vistaModal(imagen);
    fotoModal.element.style.top = window.pageYOffset + "px";
    fotoModal.element.appendChild(imagen);
    fotoModal.element.classList.remove("hidden");
    document.body.appendChild(fotoModal.element);
  }
}
