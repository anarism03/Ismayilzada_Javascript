const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkNumber(num) {
  if (num > 7) {
    console.log("Hello");
  }
}

function checkName(name) {
  if (name === "John") {
    console.log("Hello, John");
  } else {
    console.log("There is no such name");
  }
}

function printMultiplesOfThree(numbers) {
  const result = numbers.filter(n => n % 3 === 0);
  console.log("Multiples of 3:", result.join(", "));
}

rl.question("Enter a number: ", (numInput) => {
  const num = parseInt(numInput);
  checkNumber(num);

  rl.question("Enter a name: ", (nameInput) => {
    checkName(nameInput);

    rl.question("Enter array numbers (comma separated): ", (arrInput) => {
      const arr = arrInput.split(',').map(x => parseInt(x.trim()));
      printMultiplesOfThree(arr);

      rl.close();
    });
  });
});
