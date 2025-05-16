function mulplicar (X , Y) {
    var resultado = 0;
    for (var i = 0; i < Y; i++) {
        resultado += X;

    }
    return resultado;
    console.log(mulplicar(X, Y)); // 0
    X=5;
    Y=8;
    console.log(mulplicar(X, Y)); // 40
}