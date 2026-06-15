//DOM Manipulation =====> Document Object Model
// console.log( document.body);
const bodyBackground = document.body;
// bodyBackground.style.backgroundColor="green"

//1st approach
// const box4=document.getElementById('box-4');
// console.log(box4);

//2nd approach
// const h1=document.getElementsByTagName('h1')
// console.log(h1);

//3rd approach
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

//Modifying HTML Elements

// const box1 = document.getElementById('box-1');
// box1.innerHTML="<b>Saurabh Gupta<b>"
// box1.innerText="Saurabh Gupta"

// document.getElementById("box-1").innerText = "Saurabh Gupta";

// document.getElementById('p').innerText = "Saurabh";

// const box1 =document.getElementById('box-1');
// box1.style.backgroundColor='yellow'

// const box2 =document.getElementById('box-2');
// box2.classList.add('circle')

// const box3 =document.getElementById('box-3');
// box3.classList.remove('circle')

// const boxes =document.getElementsByClassName('box');

// for(let i=0;i<boxes.length;i++){
//     boxes[i].classList.add('circle')
// }

// box3.classList.remove('box')


//Adding custom tags

//creating a new element
//1st to get the access
//2nd is the content
//3rd is appending

const newPara=document.createElement('p');
newPara.innerText="This is our New Paragraph"

const cont = document.getElementById('cont');
cont.appendChild(newPara)

newPara.classList.add('box')
newPara.classList.add('circle')