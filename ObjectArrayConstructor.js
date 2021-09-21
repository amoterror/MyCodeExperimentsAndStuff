var animals = [];


class nuAn {
  constructor(anNa , anCh , anTy) {
    this.anNa = anNa;
    this.anCh = anCh;
    this.anTy = anTy;
  }
}

function objArr(name , anNa , anCh , anTy) {
  var name = new nuAn(anNa , anCh , anTy);
  animals.push(name);
}

objArr('cat' , 'cat' , 'pat' ,'dat');
objArr('dog', "F'in" , 'kick' , 'dat')

animals