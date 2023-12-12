let total = 0;
function adicionar () {
    // Pegar o item selecionado (select option)
    let item = document.getElementById('produto').selectedIndex;
    let itemSelecionado = document.getElementsByTagName('option')[item].value;
    let nomeProduto = itemSelecionado.split('-')[0];

    // Pegando o valor do produto selecionado
    let valorUni = itemSelecionado.split('R$')[1]; 

    // Pegar a quantidade de itens desejadas
    let qtdeDigitada = document.querySelector('input').value;
    
    // Adicionar os itens no carrinho de compras
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtdeDigitada}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUni}</span></section>`;

    // Calculo dos produtos no carrinho
    let preco = qtdeDigitada * valorUni;
    total = total + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$ ${total},00`;
}

function limpar() {
    total = 0;
    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = '';
    qtdeDigitada = document.querySelector('input');
    qtdeDigitada.value = '';

}