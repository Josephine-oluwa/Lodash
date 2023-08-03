import lodash from "lodash"

const categories: string[] = ["Tech", "News", "Agric", "world", "fashion", "religion", "petrol", "transport"];

const getRandom = ()=> {
  const RandomIndex = Math.floor(Math.random() * categories.length);
  return categories[RandomIndex]
}
const randomResult1 = getRandom()
console.log(randomResult1);





const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

function getRandomOption() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const randomResult = getRandomOption();
console.log("Random Result:", randomResult);





const categories2: string[] = ["Tech", "News", "Agric", "world", "fashion", "religion", "petrol", "transport"];

const randomResult3: string | undefined = .sampl_e(categories2);

if (randomResult !== undefined) {
  console.log("Randomly Displayed Result:", randomResult);
} else {
  console.log("No options to display.");
}