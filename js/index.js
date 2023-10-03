/* Função favoritar  item */
function favoritarItem(icone){
    if(icone.className === 'bi-suit-heart'){
        icone.classList.remove('bi-suit-heart');
        icone.classList.add('bi-suit-heart-fill');
    }else{
        icone.classList.remove('bi-suit-heart-fill');
        icone.classList.add('bi-suit-heart');
    }
}

/* Função trocar imagem dos produtos */
function trocarImagem(imagem){
    var imgProduto = document.getElementById("imgProduto");
    imgProduto.src = imagem.src;

  }