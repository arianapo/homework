function encontrarElemento(num, array) {
 
   for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
         return i;
      }
   }
   return -1;
}