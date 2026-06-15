//EEVENTS

//1. Event Handlers
//(onclick,onload,onmouseover,onmouseout,onkeypress,onkeydown,onkeyup)


// function onclickFunc(){
//     console.log("The Box has been Clicked");
    
// }
// function keyPressEvent(){
//     console.log("the key has been hitted");
    
// }
// function onkeyUp(){
//     console.log("onKeyUp");
    
// }
// function onkeyDown(){
//     console.log("onKeyDown");
    
// }

// function firstFuncCall(){
//     console.log("func-1");
    
// }
// function secondFuncCall(){
//     console.log("func-2");
    
// }



//2. Event Listners


const box1 = document.getElementById('box-1')
box1.addEventListener('click',(event)=>{
    console.log("box");
    
})

const cont = document.getElementById('cont')
box1.addEventListener('click',(event)=>{
    console.log("container");
    
},true)
// box1.addEventListener('click',()=>{
//     console.log("click has been Triggered - 2");
    
// })


