function carry(a){
  var args = [];
  if(arguments.length == 1){
      return carry(a, args);
  }
  else{
     return (x) => {
       args = arguments[1];
       args.push(x);
       if(a.length == args.length)
        return a(...args);
     return carry(a, args);
    }
  }
}