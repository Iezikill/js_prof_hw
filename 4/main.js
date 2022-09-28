'Use strict'

const textEl = document.querySelector('.text');
document.querySelector('button').addEventListener('click', () => {
  textEl.textContent = textEl.textContent.replace(/\B'|'\B/g, '"');
});