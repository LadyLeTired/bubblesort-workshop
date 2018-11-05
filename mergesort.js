function split(wholeArray) {

  let middle = Math.floor(wholeArray.length / 2);
  
  //we start with a big array
  //we want to split the array into two:
    //we use our middle variable
      //we can use that num by slicing the original array
      //that'll define our firstHalf and secondHalf variables
      
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  //compare the two arrays (they're sorted already)
    //compare the first two elements, remove the SMALLER of the two
    //look at next element and carry on. 
  
}

let x = [1,2,3,4,5]
console.log(split(x))
