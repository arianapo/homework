function contarElementosMayoresA10 (array) {
  
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador++;
    }
  }
  return contador;
}