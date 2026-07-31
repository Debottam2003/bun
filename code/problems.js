// "is sentence This a"
// 1. Tell me how many words are there in the sentence
// 2. Reverse the words and reconstruct the sentence again
let s = "is sentence This a";
let words = s.split(" ");
let res = [];
for (let i of words) {
    let temp = i.split("");
    console.log(temp);
    temp.reverse();
    console.log(temp);
    res.push(temp.join(""))
}
console.log(res.join(" "));