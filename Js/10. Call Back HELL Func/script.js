// console.log("one")
// console.log("two")

// setTimeout(function(){
//     console.log("this will execute after 3 seconds");
// },3000)

// console.log("three")


//CALL BACK HELL IN JAVA SCRIPT
function getCandy(callback1){
    setTimeout(()=>{
        const candies = "🍭"
        console.log("IN our getCandy method",candies);
        callback1(candies);
        // return candies;
    },3000);
    }

function handKey(candies,callback2){
    setTimeout(()=>{
        const keys =candies+"🗝️";
        console.log("IN our HandoverKeys method",keys);
        callback2(keys)
    },3000);
}


function onboarding(keys,callback3){
    setTimeout(()=>{
        const onboarded =keys+"🛄";
        console.log("IN our onboarding method",onboarded);
        callback3(onboarded)
    },3000);
}

getCandy((candies)=>{
    handKey(candies,(keys)=>{
        onboarding(keys,(onboarded)=>{
            console.log("Welcome to our Hotel",onboarded);

        })
        
    })
})


// console.log(getCandy())
// getCandy((candies)=>{
//     console.log("here is our CAndy",candies)
// })


// getCandy((candies)=>{
//     handKey(candies,(keys)=>{
//         console.log("here is your key & candies",keys);
        
//     })
// })