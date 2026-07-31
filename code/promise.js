let p = Promise.resolve(42);
console.log(p);

p.then(value => {
    console.log("Resolved with value:", value);
});

async function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async function resolved!");
        }, 1000);
    });
}

let res = asyncFunction();// res is a Promise object of pending state
// let res = await asyncFunction();// res is the message that passed in the resolve 
console.log(res);