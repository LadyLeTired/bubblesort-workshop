

describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(swap)
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort([1])).toEqual( [1] );
  });
  it('handles a single-item array', function(){
    expect( bubbleSort( [5,4,3,2,1] )).toEqual( [1,2,3,4,5] );
  });
  it('calls swap', function() {
    
  })
});

