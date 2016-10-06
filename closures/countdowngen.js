var countdownGenerator = function (x) {
  /* your code here */
  var start = x;

  return function (){

     if (start > 0) {

       console.log("T-minus",start);
       return  start = start - 1;

     } else if (start === 0) {

       console.log("Blast Off!");
       return start = start - 1;

     } else {

       return console.log("Rockets already gone, bub");

     }
  }

}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!