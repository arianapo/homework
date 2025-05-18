function convertirStringAMayusculas(array) {
  
  return array.map(function (elemento) {
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    }
    return elemento;
  });
}