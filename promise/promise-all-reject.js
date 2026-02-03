// promise-all with reject ===================
    // "new Promise((_, reject)"
    // "reject" is "2nd parameter"
    // "_" before reject "_" "underscore/ a variable" is added as parameter. bcz "reject" is "2nd parameter"
    // If any of the promise rejects, it won't wait for others to resolve and will return with reason of the promise that is rejected

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 500)
);
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 3 rejected"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });