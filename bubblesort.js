function swap(miniArray){
  let temp = miniArray[1];
  miniArray[1] = miniArray[0];
  miniArray[0] = temp;
  
  return miniArray;
}
function bubbleSort(array) {
  
  let traversal = array.length - 1;
  
  while(traversal > 0){
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        [array[i], array[i+1]] = swap([array[i], array[i+1]]);
      }
    }
    traversal--;
  }
  return array;
}


console.log(bubbleSort([5,4,3,2,1]));

// [3,2,1,4]
// [3,2][1,4]
// [3][2][1][4]
// [2,3][1,4]
// lPointer = 0;
// rPointer = 0;
