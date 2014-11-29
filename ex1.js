
function curry(func){
  return function(){
    if(func.length > arguments.length){
      var slice = Array.prototype.slice;
      var args = slice.apply(arguments);
      return function(){
        return func.apply(null, args.concat(slice.apply(arguments)));
      };
    }
    return func.apply(null, arguments);
  };
}

function split(character, str){
  return str.split(character);
}

console.log(split('b', 'abc'));

var _split = curry(split);

var words = _split(' ');

function multiply(a, b){
  return a * b;
}

var _multiply = curry(multiply);

var triple = _multiply(3);

function map(callback, list){
  var newArray = [];
  for(var i =0; i < list.length; i++){
    newArray.push(callback(list[i]));
  }
  return newArray;
}
var tripleList = curry(map)(triple);

console.log(words('alabama arkansas china'));

console.log(triple(9));

console.log(tripleList([1,2,3]));