function contarParesConContinue(numeros) {
  
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) continue;
    contador++;
  }
  return contador;
}