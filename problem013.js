function parametricSort(a, b){
  if(b != 'asc' && b != 'desc')
    return false;
  if(b == 'asc')
    return a.sort((x,y) => x>y);
  else
    return a.sort( (x,y) => x<y);
}