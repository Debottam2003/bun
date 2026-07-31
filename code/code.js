// let { log: print } = console;

// let arr = ["ronaldo", "messi", "neymar", "mbappe"];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// print("hello world!");

const number = (num) => {
    if (num > 0) {
        return `positive`;
    }
    else if (num < 0) {
        return `nagative`;
    }
    else {
        return `zero`;
    }
}

// Testing the function
function testNumber(val) {
    if (number(val[0]) === val[1]) {
        console.log(`Test passed for input ${val[0]}`);
    } else {
        console.log(`Test failed for input ${val[0]}`);
    }
}

testNumber([5, `positive`]);
testNumber([-3, `nagative`]);
testNumber([0, `zero`]);