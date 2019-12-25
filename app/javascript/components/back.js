const back = () => {
  const guessbtn = document.getElementById('notshown');
  const spybtn = document.getElementById('shown');
  const guessAction = document.getElementById('guess');
  const spyAction = document.getElementById('spy');
  if (guessbtn && spybtn) {
    guessAction.addEventListener('click', (event) => {
      spybtn.classList.add('masked');
      guessbtn.classList.remove('masked');
      guessAction.classList.add('active');
      spyAction.classList.remove('active');
    });
  }
}

export {back};
