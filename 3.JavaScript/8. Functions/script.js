// const a = 10;
// const b = 2;
// const aPlusB = a+b;
// console.log("Result: ",aPlusB)
// summation(a,b)
// const resultAandB =summation(a,b)
// console.log(resultAandB)

// const x = 12;
// const y = 6;
// const xPlusY = x+y;
// console.log("Result: ",xPlusY)
// console.log(summation(x,y))

// const l = 20;
// const k = 2;
// const lPlusK = l+k;
// console.log("Result: ",lPlusK)
// console.log(summation(l,k))

//function defination(named FUnction)
// function summation(r,k){
//     const result = r+k;
//     // console.log("Result",result);
//     return result
// }
// //function call
// summation(12,14)

// function greet(){
//     console.log("hey! welcome to the coding world :)")
// }

// greet()

// function greet2(userName){
//     console.log("hey! welcome to the coding world :)",userName)
// }

// greet2("Saurabh")

//Anonymous Func/ Func Expression

//func Defination
// let summation = function(r,k){
//     const result =r+k;
//     return result;
// }
// // func call
// console.log(summation(20,40));

//Nested function in JS

// let mul=1;
function addSquares(x, y) {
    const a=square(x);
    const b=square(y);

  function square(num) {
    return num * num;
  }
  return a+b;
}

console.log(addSquares(1, 2));
 
