//Interview

// // Two variables

// let name = 'Rixio';
// let nineteen_eighty_four = 1984;

// console.log(name);
// console.log(nineteen_eighty_four);

// // Array of numbers

// numArr = [18, 23, 31, 48, 50];

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// Shopping Trip

// Part 1
// Write a function that'll help you figure out whether you have enough money to buy all items in a shopping list.

// The function should take in:

// - A list of numbers -- the cost of every item in your shopping list
// - A number -- the amount of money you have to spend

// The function should return true if you have enough money to buy all the items in your shopping list (otherwise, it should return false).

// For example:
// [4, 3, 5], 9 //=> False
// [4, 5], 9 //=> True
// [3, 2, 1], 100 //=> True

// function enough(shoppingCart, cash) {
//     let total = 0;
//     for (let i = 0; i < shoppingCart.length; i++) {
//         total += shoppingCart[i];
//     }
//     return cash >= total;
// }

// console.log(enough([4, 3, 5], 9)); // false
// console.log(enough([4, 5], 9)); // true
// console.log(enough([3, 2, 1], 100)); // true

// Part 2

// Now your function should take discounts into consideration. Edit your function to take in additional argument -- a list of discounts. Each discount corresponds with an item in your shopping list, in order.

// Edit your function to print out the new price of each item you want to buy (don't worry about the return value for now).

// For example:
// [4, 3, 5], 9 [1, 2, 1]
// the cost of 4 is now 3

// the cost of 3 is now 1

// the cost of 5 is now 4

// function enough(shoppingCart, discounts) {
//     let newPrice = [];
//     for (let i = 0; i < shoppingCart.length; i++) {
//         newPrice.push(shoppingCart[i] - discounts[i]);
//         console.log(
//             'the cost of ' + shoppingCart[i] + ' is now ' + newPrice[i]
//         );
//     }
//     return '';
// }

// console.log(enough([4, 3, 5], 9, [1, 2, 1])); //=>
// the cost of 4 is now 3

// the cost of 3 is now 1

// the cost of 5 is now 4
// console.log(enough([4, 5], 9, [1, 2])); //=>
// the cost of 4 is now 3

// the cost of 5 is now 3

// console.log(enough([3, 2, 1], 100, [1, 0, 0])); //=>
// the cost of 3 is now 2

// the cost of 2 is now 2

// the cost of 1 is now 1

// Part 3

// If there's time, edit the return value of the function so it returns true if you can buy all of the items AFTER discounts have been applied.

// function enough(shoppingCart, cash, discounts) {
//     let total = 0;
//     for (let i = 0; i < shoppingCart.length; i++) {
//         total += shoppingCart[i];
//         total -= discounts[i];
//     }
//     return cash >= total;
// }

// console.log(enough([4, 3, 5], 9, [1, 2, 1])); // true
// console.log(enough([4, 5], 9, [1, 2])); // true
// console.log(enough([3, 2, 1], 100, [1, 0, 0])); // true
// console.log(enough([4, 4, 6], 8, [1, 0, 0])); // false

// Another solution

// function enough(shoppingCartItems, cash, discounts) {
//     const discountedPrices = shoppingCartItems.map((item, index) => {
//         return item - discounts[index];
//     });

//     const finalTotalPrice = discountedPrices.reduce((acc, val) => acc + val, 0);

//     return cash >= finalTotalPrice;
// }

// console.log(enough([4, 3, 5], 9, [1, 2, 1])); // true
// console.log(enough([4, 5], 9, [1, 2])); // true
// console.log(enough([3, 2, 1], 100, [1, 0, 0])); // true
// console.log(enough([4, 4, 6], 8, [1, 0, 0])); // false

// Lucky 3s

// The number 3 is a great number! it's so great that it should always appear t the very beginning of a list.

// Write a function that takes in a list of numbers. It should return a list with all the 3s at the beginning.
// The rest of the numbers should stay in the same order.

// For example:
// [2, 7, 3, 1, 3, 3] //=> [3, 3, 3, 2, 7, 1]
// [3, 100, 3] //=> [3, 3, 100]
// [3, 1, 1, 0] //=> [3, 1, 1, 0]

function greatThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 3) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greatThree([2, 7, 3, 1, 3, 3]));
console.log(greatThree([3, 100, 3]));
console.log(greatThree([3, 1, 1, 0]));
