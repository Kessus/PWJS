function Square(a){
  var kwadrat = {
    side: a,
    getArea: function(){
      return this.side * this.side;
    },
    getPerimeter: function(){
      return 4 * this.side;
    }
  }
  return kwadrat;
}