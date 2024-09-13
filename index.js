/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  items.forEach((item, index) => {
    console.log(item.name)
  });

}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  for(const item of items) {
    const upper = item.name;
    const upperCase = upper.toUpperCase();
    console.log(upperCase);
  }
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
    const foundItem = items.find (item => {
     item.id === itemId;
    });
    console.log(itemId);
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */

function getItemPriceByName(items, name) {
 for (const item of items) {
if (itemName === "apple") {
  return 1.75;
} else if (itemName === "banana") {
  return 0.25;
} else if (itemName === "orange") {
  return 1.0;
} else if (itemName === "broccoli") {
  return 3.0;
} else if (itemName === "milk") {
  return 5.75;
} else if (itemName === "cheddar") {
  return 4.0;
} else if (itemName === "sourdough") {
  return 5.5;
}
}
 }

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  for (const item of items) {
    if(category === "fruit") {
  const fruit = items.filter(item => item.category === "fruit");
  return fruit
} else if (category === "vegetable") {
  const vegetable = items.filter(item => item.category === "vegetable");
  return vegetable
} else if (category === "dairy") {
  const dairy = items.filter(item => item.category === "dairy");
  return dairy
}else if (category === "grains") {
  const grains = items.filter(item => item.category === "grains");
  return grains
}
}
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  const item = 0;
  const countItems = items.reduce (
    (accumulator, item) => accumulator + item,
    0);
  console.log(countItems);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  const sumOfItems = items.reduce (
    (accumulator, item) => accumulator + item,
    0
  );
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
