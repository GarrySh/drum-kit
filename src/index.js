import './index.scss';

const pageEl = document.querySelector('.page');
pageEl.addEventListener('keydown', ({ keyCode }) => {
  const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audioEl) {
    return;
  }
  const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
  audioEl.currentTime = 0;
  audioEl.play();
  keyEl.classList.add('key--active');
});

const keys = document.querySelectorAll('.key');
keys.forEach(keyEl => {
  keyEl.addEventListener('transitionend', ({ propertyName, target }) => {
    if (propertyName !== 'transform') {
      return;
    }
    target.classList.remove('key--active');
  });
});
