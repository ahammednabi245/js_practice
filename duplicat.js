const names = [ 'abul', 'babul', 'kabul', 'hero', 'prema', 'pinu', 'jui', 'mofiz', 'kabil', 'babul', 'hero', 'pinu', 'abul', 'babul', 'jui', 'prema', 'babul', 'kabul', 'mofiz', 'babul', 'kabil', 'abul', 'hero', 'kasem'];

function removeDuplicat(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name) === false){
             unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicat(names);
console.log(uniqueNames);