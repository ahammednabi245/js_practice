// console.log(4/2)

// console.log(8%2)
// console.log(18%2)
// console.log(22%2)
// console.log(30%2)


// console.log(5/2)

// console.log(5%2)
// console.log(11%2)
// console.log(17%2)
// console.log(23%2)
// console.log(35%2)
// console.log(49%2)



function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);

    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }

}

const myNumbeIsEven = isEven(5);
console.log(myNumbeIsEven);
const herNumbeIsEven =isEven(50);
console.log(herNumbeIsEven);