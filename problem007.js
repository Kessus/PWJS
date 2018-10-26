function findMax(){
  var max = -Infinity;
  for(var i = 0; i < arguments.length; i++){
    if(arguments[i] > max)
    max = arguments[i];
  }
  return max;
}