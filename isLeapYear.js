function isLeapYear (year){
        const remainder = year % 4;
        if(remainder === 0){
            // console.log('This year is a Leap year:', year)
            return true;
        }
        else{
           return false;
        }
}

const isMyYearLeapYear = isLeapYear(2020);
console.log('My year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1994);
console.log('Her year:', isHerYearLeapYear)
