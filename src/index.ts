function main() {
  console.log("--- Tip Calculator ---");
  const checkAmount: number = 50;
  const correctCheckAmount = checkAmount.toFixed(2);
  console.log(`Check Amount: $${correctCheckAmount}`);

  const tipPercentage: number = 15;
  console.log(`Tip Percentage: ${tipPercentage}%`);
  const tipAmount: number = checkAmount * (tipPercentage / 100);
  const correctTipAmount = tipAmount.toFixed(2);
  console.log(`Tip Amount: $${correctTipAmount}`);
  const totalBill: number = checkAmount + tipAmount;
  const correctTotalBill = totalBill.toFixed(2);
  console.log(`Total Bill: $${correctTotalBill}`);

  const isDevided: boolean = true;
  const splitByAmountPeople: number = 2;
  console.log(`Divided among people: ${isDevided === true ? "yes" : "no"}`);

  if (isDevided) {
    console.log(`Split between how many people: ${splitByAmountPeople}`);
    const pricePerPerson: number = totalBill / splitByAmountPeople;
    const correctPricePerPerson = pricePerPerson.toFixed(2);
    console.log(`Each person pays: $${correctPricePerPerson}`);
  }
  console.log("-----------------------------");
}
main();
