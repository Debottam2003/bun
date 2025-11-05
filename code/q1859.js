let s = "is2 sentence4 This1 a3";
console.log(s);
s = s.split(" ");
console.log(s);
let store = {};
let arr = [];
for (let i of s) {
    arr.push(i[i.length - 1]);
    store[i[i.length - 1]] = i.slice(0, i.length - 1)
}
console.log(store);
arr.sort((a, b) => {
    return a - b;
});
console.log(arr);
let res = "";
for (let i of arr) {
    console.log(i, store[i]);
    res += store[i] + " ";
}
res = res.slice(0, -1);
console.log(res);
