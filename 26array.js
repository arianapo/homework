
const encontrarPrimerMultiploDeN = (n, secuencia) => {
  
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      return secuencia[i];
    }
  }
  return null;
}