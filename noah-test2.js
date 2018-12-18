function multiply(int1){
  return function(int2){
    return int2 * int1;
  }
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(4));
//should output: 8

console.log(triple(5));
//should output: 15

//////////
//TEST 2//
//////////

function execute(value, operator){
  return operator(value);
}


execute(5, console.log);
//should log '5' to the console

function positive(x) {
  if(x > 0){
    return true;
  }
  return false
}
console.log(execute(20, positive));
// should return 'true'

console.log(execute(-5, positive));
// should return 'false'