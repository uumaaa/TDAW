class vistaModal {
  constructor(fotoModal) {
    this.fotoModal = fotoModal;
    this.element = document.createElement("section");
    this.element.id = "modal-view";
    this.element.addEventListener("click", this.alDarClick);
  }
  alDarClick() {
    document.body.classList.remove("no-scroll");
    this.classList.add("hidden");
    this.innerHTML = "";
  }
}
