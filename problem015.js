var Stack = {
  stos: [],
  push: function(a, b = 1){
    for(let i = 1; i < b; i++)
      this.stos.push(null);
    this.stos.push(a);
  },
  
  pop: function(a = 1){
    for(let i = 1; i < a; i++)
      this.stos.pop();
    return this.stos.pop(a);
  }
}