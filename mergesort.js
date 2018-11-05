function split(wholeArray) {

  let middle = Math.floor(wholeArray.length / 2);

  //we start with a big array
  //we want to split the array into two:
    //we use our middle variable
      //we can use that num by slicing the original array
      //that’ll define our firstHalf and secondHalf variables

  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
 }

 function merge(array1, array2) {
    
    let output = [];
    let lPointer = 0;
    let rPointer = 0;
    
    while (lPointer < array1.length && rPointer < array2.length) {
      
      if(array1[lPointer] < array2[rPointer]){
        output.push(array1[lPointer]);
        lPointer++;
      } else {
        output.push(array2[rPointer]);
        rPointer++;
      }
    }
    
    if(lPointer === array1.length){
      output = output.concat(array2.slice(rPointer));
    } else {
      output = output.concat(array1.slice(lPointer));
    }
    
    return output;
 }
 
 function mergeSort(inputArray) {
  debugger;
  //we're given a big array
  //split it! recursively - because we're splitting over and over until we have a bunch of single element arrays
  if(inputArray.length === 1){
    return inputArray;
  } else {
    
    let twoArrays = split(inputArray);
    let result = merge(mergeSort(twoArrays[0]), mergeSort(twoArrays[1]));
    
    return result;
  }
  
}

let x = [26,15,12,82,2,38]
console.log(mergeSort(x))
