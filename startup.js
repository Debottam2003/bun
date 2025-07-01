import chalk from "chalk";
import figlet from "figlet";
import os from "os"

figlet.text("Debottam Kar", (err, data) => {
    if (!err) {
        console.log(data);
    }
});

console.log(chalk.green(os.userInfo().username));
console.log(chalk.cyan(new Date().toLocaleString()));
console.log(chalk.bold.magenta("Hi JS/TS dev Debottam Kar"));