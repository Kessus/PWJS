var Vectors = {
  sum: function(a, b){
    var result = [];
    if(a.length != b.length)
      return false;
    else
      for(let i = 0; i < a.length; i++)
        result[i] = a[i] + b[i];
    return result;
  },

  mulByScalar: function (a, b){
    if(typeof b != 'number')
      return false;
    var result = [];
    for(let i = 0; i < a.length; i++)
      result[i] = a[i] * b;
    return result;
  }
};