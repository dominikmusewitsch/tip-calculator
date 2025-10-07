"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:readline/promises"));
const node_process_1 = require("node:process");
async function main() {
    const rl = promises_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    console.log("--- Tip Calculator ---");
    const amountStart = await rl.question("How high is the check?");
    const amount = Number(amountStart.replace(",", "."));
    if (Number.isNaN(amount) || amount <= 0) {
        console.log("Invalid amount!");
        rl.close();
        return;
    }
    const tipString = await rl.question("What percentage of tip will you give?");
    const tipPercentage = Number(tipString.replace(",", "."));
    if (Number.isNaN(tipPercentage) || amount < 0) {
        console.log("Invalid tip percentage!");
        rl.close();
        return;
    }
    const splitString = (await rl.question("Should the bill be split among multiple people? (y/n)")).toLowerCase();
    const isDivided = ["y", "n"].includes(splitString);
    let splitByAmountPeople = 1;
    if (isDivided) {
        const peopleStr = await rl.question("How many people will split the bill?: ");
        splitByAmountPeople = parseInt((peopleStr ?? "").trim(), 10);
        if (!Number.isInteger(splitByAmountPeople) || splitByAmountPeople < 2) {
            console.log("Invalid number of people!");
            rl.close();
            return;
        }
    }
    const tipAmount = amount * (tipPercentage / 100);
    const totalBill = amount + tipAmount;
    console.log(`\nCheck Amount: $${amount}`);
    console.log(`Tip Percentage: ${tipPercentage.toFixed(2)}%`);
    console.log(`Tip Amount: $${tipAmount}`);
    console.log(`Total Bill: $${totalBill}`);
    console.log(`Divide among people:${isDivided ? "y" : "n"}`);
    if (isDivided) {
        const eachPersonPays = totalBill / splitByAmountPeople;
        console.log(`Split between how many people: ${splitByAmountPeople}`);
        console.log(`Each person pays: ${eachPersonPays.toFixed(2)}`);
    }
    console.log("-----------------------------");
}
main();
