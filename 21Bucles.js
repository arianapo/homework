function esPotenciaDeDos(numero) {
  
  if (numero < 1) return false;
  while (numero > 1) {
    if (numero % 2 !== 0) return false;
    numero /= 2;
  }
  return true;
}