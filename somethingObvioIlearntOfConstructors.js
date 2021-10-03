class tingsa {
    constructor(par,tar,car) {
      this.DetCo = `Times died ${par}`; /* you don't need to assign the object property name with the same param it's declared with. 
      'this' can take any name desired and declare it as the property */
      var KD = tar / car; // It is useful especially if you want the proprty to have some value that is based on the given params.
      this.KD = KD;
    }
  }
  
  var hop = new tingsa('alo' , 5 , 6);
  console.log(hop);