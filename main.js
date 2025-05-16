document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.add-carrinho');
    const listaCarrinho = document.getElementById('itens-carrinho');
    const totalSpan = document.getElementById('total');
    let total = 0;

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const nome = botao.getAttribute('data-name');
            const preco = Number(botao.getAttribute('data-preco'));


            const li = document.createElement('li');
            li.textContent = `${nome} - R$${preco},00`;


            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btn-excluir';
            btnExcluir.addEventListener('click', function() {
                listaCarrinho.removeChild(li);
                total -= preco;
                totalSpan.textContent = total;
            });
            
            li.appendChild(btnExcluir);
            const btnAumentar = document.createElement('button');

            listaCarrinho.appendChild(li);

            total += preco;
            totalSpan.textContent = total;
        });
    });
});