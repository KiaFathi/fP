
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

var _words = curry(split)(' ');

console.log(_words('alabama arkansas china'));