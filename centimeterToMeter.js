// centimeter to meter
// trick #1

function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}


const rulerCentimeter = 500;
const rulerMeter = centimeterToMeter(rulerCentimeter);
console.log('Ruler Meter:', rulerMeter);


// trick #2

function convertToMeters(value) {
    const conversionFactor = 0.01;
    const result = value * conversionFactor;
    console.log(value + " centimeters is equal to " + result + " meters.");
  }
  
  convertToMeters(250);






// // meter to centimeter
// // trick #1

function meterToCentimeter(meter){
    const centimeter = meter * 100;
    return centimeter;
}

const meter = 2;
const ruleCentimeter =  meterToCentimeter(meter);
console.log('Ruler Centimeter:', ruleCentimeter)

// trick #2

function convertToCentimeters(value) {
    const conversionFactor = 100;
    const result = value * conversionFactor;
    console.log(value + " meters is equal to " + result + " centimeters.");
  }
  
  convertToCentimeters(6);
