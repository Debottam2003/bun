function tag(strings, ...values) {
  console.log(strings); // ["Hello ", "!"]
  console.log(values);  // ["Debottam"]
}
const name = "Debottam";
tag`Hello ${name}!`;
