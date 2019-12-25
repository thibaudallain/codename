const play = () => {
  const cards = document.querySelectorAll(".card");
  const cardsSpy = document.querySelectorAll(".card-spy");
  if (cards) {
    cards.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.currentTarget.classList.remove("hidden");
        let a = [];
        cardsSpy.forEach( (card) => {
          if (card.innerText === event.currentTarget.innerText) {
            a = card;
          }
        });
        a.classList.add("rayer");
      });
    });
  }
}

export {play}
