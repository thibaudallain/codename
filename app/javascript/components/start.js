const start = () => {
  const who = document.querySelector('.who');
  const ok = document.querySelector('.btn-ok');
  if (ok) {
    ok.addEventListener('click', (event) => {
      who.classList.add('masked');
    });
  }
}

export {start};
