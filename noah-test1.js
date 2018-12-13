let numbers = [1, 2, 3, 4, 5];

numbers.push(10);

let result = [];
for(i = 0; i < numbers.length; i++){
  if(numbers[i]%2 == 0){
    result.push(numbers[i]);
  }
}

function split(array, num){
  let arr = [];
  for(i = 0; i < array.length; i++){
    arr.push(array[i])
  }
  for(i = 0; i < num; i++){
    arr.shift();
  }
  return arr;
}


console.log(numbers);
console.log(result);
// [2, 4, 10]

console.log(split(numbers, 2))
//input: ([1, 2, 3, 4, 5, 10], 2)
//output: [3, 4, 5, 10]


