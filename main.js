var dessert = require('./word.js');


//--------word from list and split into each letter-----------------
//Test access the ice cream <yes this works>
// console.log(dessert.ice_cream.treat_1);

var getDessert = (dessert.ice_cream);
//Test if variable pulls a dessert <yes this works>
// console.log(getDessert);

//Test if variable  can split into individual characters  <yes this works>
// console.log(getDessert.split(''));
// console.log(getDessert);
//------------------------------------------------------------------

//gets all the keys in the ice cream object<this works>
var objKeys = Object.keys(getDessert);
// console.log(objKeys);
//-------------------------------------------------------------------

//get random key object or word <this works>
var rand = objKeys[Math.floor(Math.random() * objKeys.length)];
// console.log(rand);

//--------------------------------------------------------------------
//Split current word<this works>
console.log(rand.split(''));




















