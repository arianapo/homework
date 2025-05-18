function breakStatement(num) {    
    num = num + 2;
    var array = [];
    for (var i = 0; i < 10; i++) {
        num = num + 2;
        if (num === i) {
            return 'Se interrumpió la ejecución';
        } else {
            array.push(num);
        }
    }
    return array;
    
}
 