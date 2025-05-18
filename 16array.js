function multiplicarElementosPorIndice(array) {

  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] * i);
  }
  return nuevoArray;
}