function carry(a) {
    var arg = [];
    return embed(1, arg, a);
}

function embed(iteration, arg, func) {
    return (x) => { 
      arg.push(x);
      if( iteration == func.length )
        return func(...arg);
      return embed(iteration+1, arg, func);
    };
}