// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(item,index){
      if(item === "Waldo"){
        found(index)
      }
  });
}

function actionWhenFound(item) {
  console.log("Found Waldo at index at", item);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);