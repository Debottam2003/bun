console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

async function print1() {
    let data = await new Promise((resolve) => {
        resolve(3);
    });
    console.log(data);
}
print1();

async function print2() {
    let data = await new Promise((resolve) => {
        resolve(4);
    });
    console.log(data);
}
print2();

console.log(5);
//OutPut: 1 5 3 4 2

const obj = {
    handlers: {
        "/": () => {

        },
        get() {

        },
        put: () => {

        },
        delete: function () {

        }
    }
}
obj.handlers["/home"] = () => {

}
console.log(obj);