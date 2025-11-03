let obj = {
    a: 1,
    b: function () {
        console.log(this.a);
    }
};
obj.b();
let store = obj.b;
// store();// undefined as this is global object here and a is not defined in global object
let boundStore = store.bind(obj);
boundStore(); // 1 as this is bound to obj
store.call(obj); // 1 as this is called with obj as this
store.apply(obj); // 1 as this is applied with obj as this
// apply() is a method available on all JavaScript functions that allows you to call a function with a specified this context and arguments passed as an single array.
// call() is a method available on all JavaScript functions that allows you to call a function with a specified this context and arguments passed individually.
function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

greet.call(null, "Hello", "Alice"); // Hello, Alice

greet.apply(null, ["Hello", "Alice"]); // Hello, Alice
