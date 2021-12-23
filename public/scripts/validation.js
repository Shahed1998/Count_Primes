import { eratosthenes } from './algorithm.js';

export function validate(num) {
  if (num.length == 0) {
    alert('Put a number in the input field');
  } else if (num <= 1) {
    alert('Put a positive number greater than 1');
  } else if (num > 10000000) {
    alert('Number too big');
  } else {
    num = parseInt(num);
    eratosthenes(num);
  }
}
