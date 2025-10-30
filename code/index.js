let typewriter = document.getElementById("typewriter");
console.log("Hello via Bun!");
let arr = ["debottam", "okudera", "rony"];
let i = 0;
setInterval(() => {
    // console.log(arr[i]);
    // i++;
    // if (i >= arr.length) {
    //     i = 0;
    // }
    i = i % arr.length;
    let name = arr[i];
    // let str = "";
    typewriter.innerText = "";
    for (let j = 0; j < name.length; j++) {
        setTimeout(() => {
            // process.stdout.write(name[j]);
            typewriter.innerText += name[j];
        }, (j * 100));
        //console.log(j);
    }
    for (let k = name.length - 1; k >= 0; k--) {
        setTimeout(() => {
            typewriter.innerText = typewriter.innerText.slice(0, typewriter.innerText.length - 1);
        }, (name.length * 100) + (k * 100));
    }
    setTimeout(() => {
        console.log();
    }, name.length * 100 + 100);
    i++;
}, 2500);

// for (let j = 0; j < "debottam".length; j++) {
//     setTimeout(() => {
//         process.stdout.write("debottam"[j]);
//     }, (j * 100));
//     //console.log(j);
// }