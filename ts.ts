let name: string = "deb";
let age: number = 22;
let loggedin: boolean = true;
let marks: number[] = [99, 96, 95, 91, 90, 85, 84];
type user = {
    name: string,
    age: number
}
let obj: user = {
    name: "debottam",
    age: 22
};
console.log(name, age, loggedin, marks, obj);
function prompting(name: string): (id: number) => string {
    console.log(`Hello ${name}`);
    return function(id) {
        console.log("Working with higher order function.");
        return String(id)
    }
}
let yo = prompting(name) 
let func = prompting;
func(name);
yo(1);
console.log(yo(1));