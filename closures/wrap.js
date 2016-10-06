var wrapLog = function (callback, name) {

  var args = arguments[0];

   return (function () {
       var summ = callback(arguments[0], arguments[1]);
        console.log (name + "(" + arguments[0] + "," + arguments[1] + ") =>", summ);
   });

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5