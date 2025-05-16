function productoEntreNúmeros (a, b) {
  
  let resultado = 1;
  for (let i = a; i <= b; i++) {
    resultado *= i;
  }
  return resultado;
}