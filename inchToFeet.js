// const myInches = 12;
// const myFeet = myInches/ 12;
// console.log(myFeet);


// const dataInches = 144;
// const dadaFeet = dataInches /12;
// console.log('dada height', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches /12;
// console.log('dadi height', dadiFeet);

function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dataInches = 144;
const dadaFeet = inchesToFeet(dataInches);
console.log(dadaFeet);
const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log('Nana Feet:', nanaFeet);


