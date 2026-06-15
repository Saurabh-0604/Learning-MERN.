// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false;
//   if (isBoarded) {
//     resolve("You're eligible to onBoard");
//   } else {
//     reject("You're not eligible to onBoard");
//   }
// });

// ticket
//   .then((data) => {
//     console.log("wohooo", data);
//   })
//   .catch((data) => {
//     console.log("Oh Nooo", data);
//   })
//   .finally(() => {
//     console.log("executed all time");
//   });

function getCandy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const candies = "🍭";
      // console.log("IN our getCandy method", candies);
      resolve(candies);
    }, 3000);
  });
}

function handOverKeys(candies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const keys = candies+"🗝️";
      // console.log("In our handOverKeys method",keys);
      resolve(keys);
      // reject("Keys not found")
    }, 3000);
  });
}

function onBoarding(keys) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const onBoarded = keys+"🏛️";
      // console.log("In our onBoarding method",onBoarded);
      resolve(keys);
      // reject("Sorry for Delay ")
    }, 3000);
  });
}

// async-await

async function onboardClient() {
  try {
    const candy = await getCandy();
    console.log("Here is the Candy", candy);

    const key = await handOverKeys(candy);
    console.log("Here is the Key", key);

    const onBoarded = await onBoarding(key);
    console.log("Welcome To Our Restaurant", onBoarded);
  } catch (err) {
    console.log("Error Occured", err);
  }
  console.log("Happy To Assist :-)");
}
onboardClient();

// getCandy()
//   .then((candies) => {
//     console.log("Here is the Candy", candies);
//     return handOverKeys(candies);
//   })
//   .then((keys) => {
//     console.log("Here is the Key", keys);
//     return onBoarding(keys);
//   })
//   .then((onBoarded) => {
//     console.log("Welcome To Our Restaurant", onBoarded);
//   })
//   .catch((err) => {
//     console.log("Error Occured ;-(", err);
//   })

//   .finally(() => {
//     console.log("Happy To Assist You :-)");
//   });
