let arr = JSON.stringify([10, 20, 30]);
let newArr = JSON.parse(arr);
console.log(newArr);

let LocalStorage = {
    "todo data": JSON.stringify([{ name: "deb", age: 22 }, { name: "deb", age: 22 }, { name: "deb", age: 22 }]),
    token_yo_yo: "uisghfsfus"
};
console.log(LocalStorage);
console.log(JSON.parse(LocalStorage["todo data"]));
// console.log(LocalStorage.token_yo_yo);
// console.log(LocalStorage["token_yo_yo"]);