class Album {
  constructor(listaDeMiniaturas) {
    this.listaDeMiniaturas = listaDeMiniaturas;
  }
  imprimirAlbum() {
    const album = document.createElement("section");
    album.id = "album-view";
    for (let fotoMiniatura of this.listaDeMiniaturas) {
      album.appendChild(fotoMiniatura);
    }
    document.body.appendChild(album);
  }
}
