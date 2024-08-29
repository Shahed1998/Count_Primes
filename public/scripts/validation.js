import { eratosthenes } from './algorithm.js';

export function getDataAndvalidate(num) {
  if (num.length == 0) {
    alert('Put a number in the input field');
  } else if (num <= 1) {
    alert('Put a positive number greater than 1');
  } else if (num > 1000000) {
    alert('Number too big');
  } else {
    document.getElementsByClassName('modal-trigger-btn')[0].click();
    num = parseInt(num);
    return eratosthenes(num);
  }
}
