function compose(){
  return  (x) => {
    for(let i = arguments.length - 1; i >= 0; i--)
      x = arguments[i](x);
    return x;
  }
}