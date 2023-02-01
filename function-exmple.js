// function functionName (parameters){
//        functionBody
//        return
// }

// var returnValue = functionName(parameters, value);


function getAverage(asignment1, asignment2, asignment3){
    const total = asignment1+asignment2+asignment3;
    const average =total / 3;
    return average;
}

const asignment1Marks = 60;
const asignment2Marks = 58;
const asignment3Marks = 59;

var myAverage = getAverage(asignment1Marks, asignment2Marks, asignment3Marks);
console.log('my average so far:', myAverage);