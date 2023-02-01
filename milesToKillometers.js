function milesToKilometers(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const kakaWalking = 19;
const everyDay = milesToKilometers(kakaWalking);
console.log( 'Kaka Every Single Day had Walked:',everyDay);