let buffer = Buffer.from("hello world");
console.log(buffer); // Output: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buffer.toString('utf8')); // Output: hello world
console.log(buffer.toString('hex')); // Output: 68656c6c6f20776f726c64

for (let i of buffer) {
    console.log(i);
}

const buf = Buffer.alloc(1024 * 10); // 10 KB zero-filled buffer (allocates 10240 bytes memory filled with zero)
console.log(buf); // Output: <Buffer 00 00 00 ... 00> (10 KB of zeros)
buf[0] = 1;
console.log(buf[0], buf.length); // Output: 1 10240(bytes) 

console.log(new Blob()); // Container of binary or text data with extra features

let arrayBuffer = new ArrayBuffer(16);
console.log(arrayBuffer); // Output: ArrayBuffer { byteLength: 16 }
let view = new Uint8Array(arrayBuffer);// Unsigned 8-bit integer array provides a view or usecase of the ArrayBuffer

view[0] = 1;
view[1] = 2;

console.log(view); // Output: Uint8Array(16) [ 1, 2 ]

for (let i of view) {
    console.log(i); // Output: 1, 2 
}
console.log(view.buffer); // Output: ArrayBuffer { byteLength: 16 }
console.log(view.byteLength); // Output: 16

import fs from 'fs';

fs.readFile('./package.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data); // Output: <Buffer ...> (contents of buffer.js file)
    console.log("Total characters in the file: ",data.length); // Output: length of the buffer
    console.log(data.toString('utf8')); // Output: contents of buffer.js file as a string
});

new Uint8Array(10); // Creates a new Uint8Array with 10 elements, all initialized to 0
new Uint8Array([1, 2, 3]); // Creates a new Uint8Array with elements 1, 2, and 3

const full = new Uint8Array([1, 2, 3]);
// Create a new Uint8Array from the underlying buffer (starting at index 1, length 2)
// const sliced = new Uint8Array(full, 1, 2);
const sliced = new Uint8Array(full.buffer, 1, 2);

console.log(sliced);
// Output: Uint8Array(2) [ 2, 3 ]

