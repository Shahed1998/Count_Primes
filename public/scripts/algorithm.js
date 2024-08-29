export function eratosthenes(num) {
  const isPrime = [],
    showNum = [];
  let i,
    j,
    count = num - 2;

    num++;

  for (i = 0; i < num; i++) {
    isPrime[i] = true;
  }

  isPrime[0] = isPrime[1] = false;

  for (i = 2; i < Math.sqrt(num); i++) {
    for (j = Math.pow(i, 2); j < num; j += i) {
      if (isPrime[j] == false) {
        continue;
      }
      isPrime[j] = false;
      count -= 1;
    }
  }

  for (i = 0; i < isPrime.length; i++) {
    if (isPrime[i] == true) {
      showNum.push(i);
    }
  }

  return showNum;

}
