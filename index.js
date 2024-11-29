document.querySelectorAll(".card").forEach((img) => {
  img.addEventListener("click", () => {
    document
      .querySelectorAll(".card")
      .forEach((el) => el.classList.remove("zoomed"));
    img.classList.toggle("zoomed");
  });
});

let selectedCard = null;
const cards = document.querySelectorAll(".card");
const button = document.getElementById("btn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedCard = card.id;
  });
});

button.addEventListener("click", () => {
  if (!selectedCard) {
    alert("Por favor, selecione uma carta primeiro.");
    return;
  }

  const winningCard = "card" + (Math.floor(Math.random() * 3) + 1);
  if (selectedCard === winningCard) {
    alert("Parabéns! Você ganhou o direito de me dá 'nota 100' !");
  } else {
    alert("Que pena! Tente novamente pelo bem da minha nota.");
  }

  location.reload();
});
