var listaDeMiniaturas = [];
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const fotoMiniatura = new FotoMiniatura(photoSrc);
  const image = fotoMiniatura.crearImagenConListener();
  listaDeMiniaturas.push(image);
}

const album = new Album(listaDeMiniaturas);
album.imprimirAlbum();
