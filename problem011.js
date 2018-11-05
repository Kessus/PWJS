function deepFindAndCount(a, b){
  var counter = 0;
  for(let element of a){
    if(element instanceof Array)
      counter += deepFindAndCount(element, b);
    else
      if(element == b)
        counter++;
  }
  return counter;
}