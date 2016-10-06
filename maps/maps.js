
var dogs = ["pitbull", "shitzu", "rotty"];

Array.prototype.myMap = function(callback){
  var newArray= [];
  console.log(this);
  this.forEach(function(item){
      newArray.push(callback(item));
  });
  return newArray;
}



var newdogs = dogs.myMap(function(item){
     return item.toUpperCase();
});
console.log(newdogs);