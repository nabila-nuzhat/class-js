// promise ref source: https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj

// promise.all()
    // if "ALL promises are resolved", only then resolve runs, otherwise if only 1 promise "rejected", it is "catch"
    // If any of the promise rejects, it won't wait for others to resolve and will return with reason of the promise that is rejected

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

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });