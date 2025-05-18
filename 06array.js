 function invertirArray(array) {
  
   var arrayInvertido = [];
   for (var i = array.length - 1; i >= 0; i--) {
     arrayInvertido.push(array[i]);
   }
   return arrayInvertido;
   console.log(arrayInvertido);      

}
