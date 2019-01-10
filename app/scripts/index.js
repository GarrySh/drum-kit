import '../styles/main.styl';

const pageEl = document.querySelector('.page');

pageEl.addEventListener('keydown', ({ keyCode }) => {
  const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audioEl) {
    return;
  }
  const keyEl = document.querySelector(`.drum-kit__key[data-key="${keyCode}"]`);
  audioEl.currentTime = 0;
  audioEl.play();
  keyEl.classList.add('drum-kit__key--active');
});

const keys = document.querySelectorAll('.drum-kit__key');
console.log({ keys });
keys.forEach(keyEl => {
  keyEl.addEventListener('transitionend', ({ propertyName, target }) => {
    if (propertyName !== 'transform') {
      return;
    }
    target.classList.remove('drum-kit__key--active');
  });
});
