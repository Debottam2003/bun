import chalk from "chalk";
import figlet from "figlet";
import os from "os";

console.log(
  chalk.yellow(
    figlet.textSync("Debottam Kar")
  )
);

console.log(chalk.green(os.userInfo().username));
console.log(chalk.cyan(new Date().toLocaleString("en-IN")));
console.log(chalk.bold.magenta("Hi JS/TS dev Debottam Kar"));

// figlet.text("Debottam Kar", (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });