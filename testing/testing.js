console.log("This is the tesing...");

function add(a, b) {
    return a + b;
}

function test(condition, message) {
    if (!condition) {
        throw new Error(message)
    }
}

let testCases = [[5, 10, 15], [4, 8, 12], [3, 3, 6]];

for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    let [a, b, result] = testCase;
    try {
        test(add(a, b) === result, `${a} + ${b} should be ${result}`);
        console.log(`Test case ${i + 1} is passed`);
    }
    catch (e) {
        console.log(e.message);
    }
}

// let arr = ["a", "b", "c"];
// console.log(arr["0"]); // "a"
// console.log(arr[0]);   // "a"
