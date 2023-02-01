const  lyrics = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways."
const parts = lyrics.split(' ')
const sentence = lyrics.split('.')
const chars = lyrics.split('')


const partial = lyrics.slice(11, 53);
const partial2 = lyrics.substring(11, 54);


const lines = [
    'Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways',
    ' Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways', 
  ]
  const newBlog = lines.join(' :')


console.log(parts);
console.log(sentence);
console.log(chars);
console.log(partial);
console.log(partial2);
console.log(newBlog);