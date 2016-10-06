var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortName = function(arry){

  arry.sort(function(a,b){
    if(a.age > b.age){
      return -1;
    }
    if(a.age < b.age){
      return 1;
    }
    return 0;
  });

  arry.sort(function(a,b){
    var aname = a.name;
    var bname = b.name;

    if(aname > bname){
      return 1;
    }
    if(aname < bname){
      return -1;
    }
    return 0;
  });

  return arry;
}

var t = sortName(students);
console.log(t);