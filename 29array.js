function encontrarNumeroFaltante(numeros) {
  
  if (numeros.length === 0) return null;
  let max = Math.max(...numeros);
  let min = Math.min(...numeros);
  let expectedSum = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);
  let actualSum = numeros.reduce((acc, num) => acc + num, 0);
  
  return expectedSum - actualSum;
}