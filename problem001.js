function triangleArea(a, b, c){
  if(Math.sign(a) + Math.sign(b) + Math.sign(c) != 3)
    return -1;
  if( a + b > c && b + c > a && a + c > b){
    var p = (a + b + c ) / 2;
    return parseFloat(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2));
  }
  else
    return -1;
}