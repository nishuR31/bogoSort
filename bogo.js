const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function bogo() {
  console.time("Time taken");

  let inList = [];
  let n = 0;

  try {
    n = parseInt(await rl.question("Insert number of values: "));
    if (isNaN(n) || n <= 0) {
      console.log("Please enter a valid positive number.");
      rl.close();
      return;
    }

    let i = 0;
    while (i < n) {
      const value = await rl.question(`Enter value ${i + 1}: `);
      const number = parseInt(value);

      if (isNaN(number)) {
        console.log("Invalid input. Please enter a number.");
        continue;
      }

      inList.push(number);
      i++;
    }

    console.log(`Your list: ${inList}`);
    rl.close();
  } catch (e) {
    console.error("Error reading input:", e);
    rl.close();
    return;
  }

  const sortedList = [...inList].sort((a, b) => a - b);
  let newList = [...inList];
  let attempts = 0;

  while (JSON.stringify(newList) !== JSON.stringify(sortedList)) {
    shuffle(newList);
    attempts++;
  }

  console.log(`Sorted list: ${newList}`);
  console.log(`Number of shuffles: ${attempts}`);
  console.timeEnd("Time taken");
}

bogo();
