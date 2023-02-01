var shoppingCart ={
    Books:3,
    Sunglass:1,
    Keyboard:5,
    Mouse:1,
    pen:25,
}
var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'Mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertiesValues);