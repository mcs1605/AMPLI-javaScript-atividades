const botoes = document.querySelectorAll('.botao');
const escolhas = ['pedra', 'papel', 'tesoura'];

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const escolhaJogador = botao.dataset.escolha;
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

    document.getElementById('jogadorEscolha').textContent = escolhaJogador;
    document.getElementById('computadorEscolha').textContent = escolhaComputador;

    const mensagem = verificarVencedor(escolhaJogador, escolhaComputador);
    document.getElementById('mensagem').textContent = mensagem;
  });
});

function verificarVencedor(jogador, computador) {
  if (jogador === computador) {
    return 'Empate!';
  }

  if (
    (jogador === 'pedra' && computador === 'tesoura') ||
    (jogador === 'papel' && computador === 'pedra') ||
    (jogador === 'tesoura' && computador === 'papel')
  ) {
    return 'Você venceu! 🎉';
  } else {
    return 'Você perdeu! 😢';
  }
}
