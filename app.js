let amigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById('amigo');
  const nome = inputNome.value.trim();

  if (nome === '') {
    alert('Você precisa inserir um nome');
    return;
  }

  amigos.push(nome);

  atualizarLista();

  inputNome.value = '';
}

function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione nomes antes de fazer o sorteio');
    return;
  }

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}

function limparLista() {
  amigos = [];
  atualizarLista();
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}



