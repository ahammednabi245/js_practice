function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

// add (45, 15);

var total = add(45, 35);
// console.log('total', total);

function bringSingara(money){
         var singaraPrice = 10;
         var quantity = money / singaraPrice;
         return quantity;
}
var mytaka = 150;
var singaras = bringSingara(mytaka);
console.log('Eating singaras:', singaras);