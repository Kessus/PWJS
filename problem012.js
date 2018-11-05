function objectsDiff(a, b){
  var properties = [];
  for(let argument in a)
    properties.push(argument);
  for(let argument in b){
    if(properties.indexOf(argument) != -1)
      properties.splice(properties.indexOf(argument),1);
    else
      properties.push(argument);
  }
  return properties;
}