const shopingCart = [ 
    {name: 'Shart', price: 2200},
    {name: 'Pant', price: 1500},
    {name: 'T-shart', price: 800},
    {name: 'Belt', price: 900},
    {name: 'Shoe', price: 1200},
];


function totalCost (products){
    let sum = 0;
     for(let i = 0; i < products.length; i++){
        const product = products[i];
         sum = sum + product.price;
     }
     return sum;
}


const expense = totalCost(shopingCart);
console.log('Total:', expense )