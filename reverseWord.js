function reverseWords(str){
       const words = str.split(' ');
       const result = [];
     for(let i = words.length-1; i >=0; i-- ){
       const element = words [i];
       result.push(element);
    
     }
     console.log(result);
    const reverse =result.join(' ');
    console.log(reverse)
    return reverse;
}



const myString = 'I am a good boy';
reverseWords(myString);


