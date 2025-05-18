function mesesDelAño (array) {
 
  let mesesEncontrados = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      mesesEncontrados.push(array[i]);
    }
  }
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}