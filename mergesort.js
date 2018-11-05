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
  //compare the two arrays (they’re sorted already)
    //compare the first two elements, remove the SMALLER of the two
    //look at next element and carry on.
    let output = [];

    while (array1.length > 0) {
        if (array1[0] < array2[0]) {
            output.push(array1[0]);
            array1 = array1.slice(1);
        } else if (array2[0] < array1[0]) {
            output.push(array2[0]);
            array2 = array2.slice(1);
        }
    }
    output = output.concat(array2[0]);
    return output;
 }
 
 function mergeSort(inputArray) {

  //we're given a big array
  //split it! recursively - because we're splitting over and over until we have a bunch of single element arrays
  let output = []
  
  if(inputArray === 1){
    return inputArray;
  }
  
  //In an array with n elements, there will always (?) be n-1 splits
  //if we use a for loop, what happens each loop?
  //split returns two arrays
  let twoArrays = split(inputArray);
  
  //we want to address the first array and split it
  //
  
  
  
  // while (splitCounter <= inputArray.length - 1){
  //   let doubleSplit = split(twoArrays[0])
  //   splitCounter++;
  //   twoArrays[0] = doubleSplit[0];
  //   output.push(twoArrays[0]);
  // }
  
  
  return output;

}

let x = [26,15,12,82,2,38]
console.log(mergeSort(x))
