function reverse(a){
  return function() {
    var reversed = [];
    for(var i = arguments.length - 1; i >= 0; i--)
      reversed.push(arguments[i]);
    return a(...reversed);
  }
}