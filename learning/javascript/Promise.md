

### Promise.all()

The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

```

//this promise gets rejected
console.clear();
const p1 = Promise.all([
  Promise.reject("first rejected"),
  Promise.resolve("second resolved")
])
  .then((res) => {
    console.log("resolved called from p1", res);
  })
  .catch((error) => console.error("Error from p1", JSON.stringify(error)));

//this promise gets fulfilled
const p2 = Promise.all([
  Promise.resolve("first resolved"),
  Promise.resolve("second resolved")
])
  .then((res) => {
    console.log("resolved called p2", res);
  })
  .catch((error) => console.log("Error from p2", JSON.stringify(error)));

```

### Promise.allSettled()

The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

```
//this promise gets fulfilled with first promise status as rejected
console.clear();
const p1 = Promise.allSettled([
  Promise.reject("first rejected"),
  Promise.resolve("second resolved")
])
  .then((res) => {
    console.log("resolved called from p1", res);
  })
  .catch((error) => console.error("Error from p1", JSON.stringify(error)));

//this promise gets fulfilled with both promise status as fulfilled
const p2 = Promise.allSettled([
  Promise.resolve("first resolved"),
  Promise.resolve("second resolved")
])
  .then((res) => {
    console.log("resolved called p2", res);
  })
  .catch((error) => console.log("Error from p2", JSON.stringify(error)));


```
___

### Promise.any() 
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.



```
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];
console.clear();
Promise.any(promises)
  .then((value) => console.log(value))
  .finally((resp) => {
    console.log(JSON.stringify(promises));
  });

// Expected output: "quick"

```
___

### Promise.race()
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

```
___
### Comparision:
|     | Short-circuit? | Short-circuits on? | Fulfilled on? | Rejected on? |
| --- | --- | --- | --- | --- |
| Promise.all | Yes | First rejected promise | All promise fulfilled | First rejected promise |
| Promise.allSettled | No  | N/A | Always | N/A |
| Promise.race | Yes | First settled | First promise fulfilled | First rejected promise |
| Promise.any | Yes | First fulfilled | First promise fulfilled | All rejected promises |


