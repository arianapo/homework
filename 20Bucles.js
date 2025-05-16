function sumarHastaNConBreak (n) {
   
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
        if (suma > 100) {
            break;
        }
    }
    return suma;
}