function obtenerPrimerStringLargo (array) {
  
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length > 5) {
      return array[i];
    }
  }
  return null; // Si no se encuentra ningún string largo, se puede devolver null o undefined.
}