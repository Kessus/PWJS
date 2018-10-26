function stringRotate(a,b){
  var result = "";
  if(b < 0 || isNaN(b))
    return result;
  b = Math.round(b) % a.length;
  result = a.slice(b,a.length) + a.slice(0, b);
  return result;
}