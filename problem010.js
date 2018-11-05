function deepCopy(a){
  var b = [];
  for(let element of a){
    if(element instanceof Array)
      b.push(deepCopy(element));
    else
      b.push(element);
  }
  return b;
}