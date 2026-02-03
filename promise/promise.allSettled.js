// Promise.allSettled()
    // waits all to settle
    // if rejected, returns the value/reason in array and results
    // - status + reason
    // as array of objects of resolve + reject
    // - status + value
    // more precise 
    // catch is not mandatory Promis.allSettled()
    // so it can be filtered, by looping results// eg. image upload too many, failed which ones


const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.allSettled(promisesArray).then((results) => {
  console.log("All promises settled:", results);
});

