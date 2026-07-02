// let variable=123;

// let arrName=[1,2,3,4,5];
// console.log(arrName);

// Heteogenous data storage--->
let arrHet = [
  "abc",
  "xyz",
  123,
  true,
  function dummyFunction() {
    console.log("dummy Function");
  },
  { name: "Saurabh", age: 20 },
];
// console.log(arrHet[5]);
// console.log(arrHet.length);

// arrHet[2]=20
// console.log(arrHet)

// let newArr = arrHet;
// console.log(newArr)
// newArr[0]="devloper"
// console.log(newArr)
// console.log(arrHet)

// console.log(arrHet.indexOf(123));
// console.log(arrHet.includes(456));

// console.log(arrHet)
// arrHet.push("laptop");//adding at the back

// console.log(arrHet)
// arrHet.unshift("mobile");//adding at the first

// console.log(arrHet);
// arrHet.shift()
// console.log(arrHet);


let marks=[98,77,94,55,62,48,92,29]
console.log(marks)

// marks.sort()
// console.log(marks)

let subArrMarks =marks.slice(2,6)
console.log(subArrMarks)