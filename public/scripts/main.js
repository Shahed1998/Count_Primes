import { validate } from './validation.js';

const checker = document.querySelector('#checker');

checker.addEventListener('click', () => {
  const num = document.querySelector('#num').value;
  validate(num);
});
