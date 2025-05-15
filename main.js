const botoes = document.querySelectorAll('.add-carrinho');
const itensCarrinho = document.querySelector('.itens-carrinho');
const total = document.getElementById('total');

let totalpreco = 0;

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        const li = document.createElement('li');
        li.textContent = `${nome} - R$ ${preco},00`;
        itensCarrinho.appendChild(li);

        totalpreco += preco;
        total.textContent = totalpreco.toFixed(0);


    });
});