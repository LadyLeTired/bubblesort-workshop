describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect ( split ([1,2,3,4])).toEqual([[1,2],[3,4]]) 
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect ( merge ([2,7,10],[1,3,4,11])).toEqual([1,2,3,4,7,10,11]);
  });
});

describe('mergeSort function', function(){
  it('it can merge and sort! wow!', function(){
    expect (mergeSort ([26,15,12,82,2,38])).toEqual([2,12,15,26,38,82]);
  });
});
