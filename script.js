// Obtém referências ao formulário e à área de exibição do ingresso
const ticketForm = document.getElementById('ticketForm');
const ticketDisplay = document.getElementById('ticketDisplay');
const yearInput = document.getElementById('year');
const userImageInput = document.getElementById('userImage');
const ticketUserImage = document.getElementById('ticketUserImage');

// Define o ano máximo como o ano atual
const currentYear = new Date().getFullYear();
yearInput.setAttribute('max', currentYear);

// Função auxiliar para adicionar um zero à esquerda em valores de um único dígito
function padWithZero(value) {
  const numericValue = Number(value);
  return numericValue < 10 ? `0${numericValue}` : `${numericValue}`;
}

// Adiciona um listener de evento para o envio do formulário
ticketForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os dados inseridos pelo usuário
  const name = document.getElementById('name').value;
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  const movie = document.getElementById('movie').value;
  const ticketType = document.getElementById('ticketType').value;

  // Formata o dia e o mês com zeros à esquerda
  const formattedDay = padWithZero(day);
  const formattedMonth = padWithZero(month);

  // Combina dia, mês e ano em uma única string de data de nascimento
  const birthdate = `${formattedDay}/${formattedMonth}/${year}`;

  // Preços dos ingressos
  const movie_prices = {
    "Bit-Man: O Filme": 32,
    "Soussa no Abstratoverso": 50,
    "Dr. Garfo": 25,
    "Certinho 2: O Retorno de Java": 28,
    "Bogosort: A Ordenação Final": 108,
  };

  const full_price = movie_prices[movie] || 32.0;

  const prices = {
    Adulto: full_price,
    Infantil: 0.5 * full_price,
    Estudante: 0.5 * full_price,
    VIP: 0,
  };

  // Atualiza as informações do ingresso
  document.getElementById('ticketName').textContent = name;
  document.getElementById('ticketBirthdate').textContent = birthdate;
  document.getElementById('ticketMovie').textContent = movie;
  document.getElementById('ticketTypeDisplay').textContent = ticketType;
  document.getElementById('ticketId').textContent = `#${Math.floor(
    Math.random() * 100000
  )}`;
  document.getElementById('ticketPrice').textContent = `R$${prices[
    ticketType
  ].toFixed(2)}`;

  // Exibe a imagem carregada pelo usuário
  if (userImageInput.files && userImageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      ticketUserImage.src = e.target.result;
    };
    reader.readAsDataURL(userImageInput.files[0]);
  }

  // Exibe o ingresso
  ticketDisplay.style.display = 'flex';
});