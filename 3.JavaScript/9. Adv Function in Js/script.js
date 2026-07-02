// Advance Functions in JS
//Arrow function

//Named FUnc
// function greet() {
//   console.log("heloo Everyone! :)");
// }
// greet();

// //Anonymous func / func Expresssion
// let greet2 = function () {
//   console.log("helo Everyone! :)");
// };
// greet2();

// //Arrow Func
// let greet3 = () => {
//   console.log("helllo Everyone! :)");
// };
// greet3();

// const greet=(count)=>{
//     console.log("hello All",count);

// }
// greet(3)

// const square =(num)=>num*num
// console.log(square(2));

//CAll BACK func => passed as an arguement to the another func(fgunc as a parameter)

// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };
// console.log(calculate(2,3,function(n1,n2){
//     return n1+n2;
// }));

//anonymous func method 1
// const summation = calculate(6, 4, function (n1, n2) {
//   return n1 + n2;
// });

// console.log(summation);

// //named func method 2
// function sub(a,b){
//     return a-b
// }
// const subtraction = calculate(6, 4, sub)

// console.log(subtraction);

// //Arrow func method 3
// const mul=(a,b)=>a*b
// // const multiplication=calculate(6,4,mul)
// console.log(mul(4,6));
// console.log(multiplication);



const arr=[2,5,6,7,8,-3,-6,-2];
const printfirstNegativeNumber=(num)=>num<0;

// const result=arr.find(printfirstNegativeNumber)
// console.log(result);
// const result1=arr.findIndex(printfirstNegativeNumber)
// console.log(result1);

// arr.forEach((num)=>{
//     console.log(num)
// })

arr.forEach((num,index)=>{
    console.log("Element:",num,"Index:",index)
})