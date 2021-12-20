const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {

  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < livros.length; atual++) {
    if (arrProdutos[atual].precos < arrProdutos[maisBarato].preco){    
      maisBarato = atual
    }
  }
  return maisBarato;
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)

module.exports = menorValor; 