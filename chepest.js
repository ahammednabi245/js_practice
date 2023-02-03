const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb',  price:36000, color: 'silver'},
    { name: 'Walton', camera: 10, storage: '32gb',  price:22000, color: 'black'},
    { name: 'iphone', camera: 12, storage: '32gb',  price:136000, color: 'silver'},
    { name: 'Xaomi', camera: 10, storage: '28gb',  price:20000, color: 'blue'},
    { name: 'Realme', camera: 12, storage: '32gb',  price:25000, color: 'white'},
    { name: 'Nokia', camera: 16, storage: '32gb',  price:48000, color: 'black'},
]

function cheapestPhone(phones){
    let cheapest = phones [0];
  for(let i = 0; i < phones.length; i++ ){
    const phone = phones [i];
    // console.log(phone);

    if(phone.price < cheapest.price ){
        cheapest = phone;
    }
  }
  return cheapest;
}


const mySelection =  cheapestPhone(phones);
console.log(mySelection);