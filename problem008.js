function magicSequence(a){
  a = Math.round(a);
  if(a == 1)
    return -1;
  else
    if(a < 4)
      return -2;
    else
    return magicSequence(a - 1) * (a - 3);
}