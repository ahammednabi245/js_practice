// function feetToInches(feet){
//     const inches = feet * 12;
//     return inches;
// }


// const sajjadFeet = 5;
// const sajjadInches = feetToInches(sajjadFeet);
// console.log('Sajjad Inches:', sajjadInches);













  function feetToInches(sajjadHeight){
    
    if(sajjadHeight.indexOf('"') >= 0 ){
        const feet = sajjadHeight.split("'")[0];
        const inches = sajjadHeight.split("'")[1].replace('"', '');
        const totalInches = (parseInt(feet) * 12) + parseInt(inches);
        return totalInches;
    }
    else{
        const feet = sajjadHeight.replace("'", "");
        const subTotalInches = feet * 12;
        return subTotalInches;
    }
   
  }

  const sajjadHeight = "6'5\"";
  const subTotalInches = feetToInches(sajjadHeight);
  console.log(subTotalInches)






//   function convertToInches(height) {
//     let feet = height.split("'")[0];
//     let inches = height.split("'")[1].replace('"', '');
//     let totalInches = (parseInt(feet) * 12) + parseInt(inches);
//     return totalInches;
//   }
//   let height = "5'4\"";
//   let totalInches = convertToInches(height);
//   console.log(totalInches)




// function convertToInches(height) {
//     let feet = height.replace("'", "");
//     let totalInches = parseInt(feet) * 12;
//     return totalInches;
//   }
//   let height = "5'";
//   let totalInches = convertToInches(height);
//   console.log(totalInches) 
    







    
// let height = "5'4\"";
// let feet = height.split("'")[0];
// let inches = height.split("'")[1].replace('"', '');
// let totalInches = (parseInt(feet) * 12) + parseInt(inches);
// console.log(totalInches);