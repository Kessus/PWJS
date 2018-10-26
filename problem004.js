function getTotalNumberOfNewYaersEveSundays(a, b){
  var result = 0;
  if(!Number.isInteger(a) || !Number.isInteger(b))
    return undefined;
  a = Math.abs(a);
  for(a; a <= b; a++){
    var date = new Date(a,0,1);
    if(date.getDay() == 0)
      result++;
  }
  return result;
}