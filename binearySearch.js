function binearySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// BigO = O(logn) our function contains 1 while loop but in every iteration we reduce the input size by half

// console.log(binearySearch([-5, 2, 4, 6, 10], 10));
// console.log(binearySearch([-5, 2, 4, 6, 10], 6));
// console.log(binearySearch([-5, 2, 4, 6, 10], 20));


function recursibeBinearySearch ( arr, target){
return search(arr, target, 0 , arr.length -1);
}

function search(arr, target, leftIndex, rightIndex){
  let middleIndex = Math.floor((leftIndex + rightIndex) /2) ;
  if(leftIndex > rightIndex){
    return -1;
  }
  if(target === arr[middleIndex]){
    return middleIndex;
  }
  if(target <arr[middleIndex]){
    return search(arr, target, leftIndex , middleIndex -1)
  }else{
    return search (arr, target, middleIndex+1 , rightIndex)
  }
}

console.log("recursibe bineary search")

console.log(recursibeBinearySearch([-5, 2, 4, 6, 10], 10));
console.log(recursibeBinearySearch([-5, 2, 4, 6, 10], 6));
console.log(recursibeBinearySearch([-5, 2, 4, 6, 10], 20));
