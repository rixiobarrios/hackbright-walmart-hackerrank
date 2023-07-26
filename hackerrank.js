// Hackerrank Assesment Solution for Hackbright/Wallmart:

// First Section

//Part 1

// let username1 = "programmerLady321";
// let username1Yob = 1998;

// let username2 = "cool_coder13";
// let username2Yob = 1982;

// let username3 = "sarah_hacks";
// let username3Yob = 1998;

// //Part 2

// console.log(username1);
// console.log(username2);
// console.log(username3);

// //Part 3

// if(username1Yob === username3Yob) {
//     console.log("YES born in the same year")
// } else {
//     console.log("No, not born in the same year")
// }

// //Part 4

// if(username1.length <= 12) {
//     console.log("YES username is valid")
// } else {
//     console.log("NO username is too long")
// }

// Second Section

// Part 1

// for(let i = 70; i <= 85; i++) {
//     console.log(i)
// }

// Part 2

// const dwarfPlanets = ["Haumea", "Eris", "Pluto", "Makemake", "Ceres"];

// for(let i = 0; i < dwarfPlanets.length; i++ ) {
//     console.log(dwarfPlanets[i])
// }

// Part 3

// for(let j = 0; j < dwarfPlanets.length; j++) {
//     if(dwarfPlanets[j].length < 6) {
//         console.log(dwarfPlanets[j])
//     }
// }

// Part 4

// const dwarfPlanetsYear = [283, 561, 248, 310, 5];

// for(let k = 0; k < dwarfPlanetsYear.length; k++) {
//     if(dwarfPlanetsYear[k] < 10) {
//         console.log("CLOSE TO EARTH YEAR");
//     } else {
//         console.log("LONG YEAR")
//     }
// }

// Third Section

// const objectsFound = [0,1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < objectsFound.length; i++) {
//     if(objectsFound[i] === 3 || objectsFound[i] === 4) {
//         console.log("DONATE TO MUSEUM gemstone")
//     } else if(objectsFound[i] === 5 || objectsFound[i] === 9) {
//         console.log("DONATE TO MUSEUM fossil")
//     } else {
//         console.log("DISCARD", objectsFound[i])
//     }
// }

// Fourth Section

// Tremendous Tower Traversal

// Solution 1 (forLoop)
// const input1 = '()))('; // 1

// const getTreasureFloor = (treasureMap) => {
//     let floor = 0;
//     for (let i = 0; i < treasureMap.length; i++) {
//         if (treasureMap[i] === '(') {
//             floor = floor - 1;
//         } else {
//             floor = floor + 1;
//         }
//     }
//     return floor;
// };
// console.log(getTreasureFloor(input1));

// Solution 2 (Hash)
// const input1 = '()))('; // 1
//
// function tower(treasureMap) {
//     let floor = 0;

//     const map = {
//         '(': -1,
//         ')': 1,
//     };

//     for (let i = 0; i < treasureMap.length; i++) {
//         // console.log(map[treasureMap[i]]);
//         floor += map[treasureMap[i]];
//     }
//     return floor;
// };

// console.log(tower(input1));

// Solution 3 (.forEach())
// const input1 = '()))('; // 1

// const getTreasureFloor = (treasureMap) => {
//     let floor = 0;
//     // console.log('start:', floor);

//     treasureMap.split('').forEach((i, idx) => {
//         // console.log(i);

//         if (i === '(') {
//             floor -= 1;
//         } else {
//             floor += 1;
//         }
//     });
//     return floor;
// };

// console.log(getTreasureFloor(input1));

// Fifth Section

// Coffee Shop Order
// (not found)

// Shopping Cart
// Figure out if you have enough cash to buy whatever is in the shopping cart

// function enough(shoppingArr, cash) {
//     let total = 0;
//     for (let i = 0; i < shoppingArr.length; i++) {
//         total += shoppingArr[i];
//         // console.log(total)
//     }
//     return cash > total;
// }

// console.log(enough([4, 3, 5], 9));
// console.log(enough([2, 1, 8], 30));
