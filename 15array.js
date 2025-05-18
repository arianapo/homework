

const encontrarIndiceMayor = (array) => {   
   
    let mayor = 0;
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
            indice = i;
        }
    }
    return indice;
}