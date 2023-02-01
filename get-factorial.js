function getFactorial(number){
    let factorial = 1;
   for(let i = 1; i<=7; i++ ){
    factorial = factorial + 1;
    console.log(i)

   }
   return factorial;

}


const factorial = getFactorial(8);
console.log('factorial Of 8 is:', factorial) 