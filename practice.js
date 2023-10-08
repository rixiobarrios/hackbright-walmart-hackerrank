// # Add All Numbers

// Write a function that takes in a list of numbers. It should return the sum of
// all the numbers in the list.

// For example:

// [1, 1, 1] => 1 + 1 + 1 => 3

// [] => 0

// function sumNums(numsArr) {
// // initialize total variable
//     let total = 0;
// // iterate through array with forloop
//     for (let i = 0; i < numsArr.length; i++) {
// // add iteration of numbers to total
//         total = total + numsArr[i];
//     }
// // return total
//     return total;
// }

// console.log(sumNums([1, 2, 3, 4, 5]));

// Another solution

// function addNumbers(nums) {
// // initialize total variable
//     let total = 0;
// // iterate through array with forofloop
//     for (let num of nums) {
// // add total and iteration of array of numbers
//         total += num;
//     }
// // return result
//     return total;
// }

// console.log(addNumbers([1, 2, 3, 4, 5]));

// Another solution

// function addNums(arrNums) {
// // using .reduce()
//     return arrNums.reduce((accumulator, currentVal) => {
//         return accumulator + currentVal;
//     }, 0);
// }
// console.log(addNums([1, 2, 3, 4, 5]));

//---------------------------------------------------------------

// # Find Longest Word

// Write a function that takes in a list of words. It should return the longest
// word (the one with the greats amount of characters) in the list.

// If there's a tie, return the word that appears earliest.

// For example:

// ["boo", "a", "I", "hi"] => 'boo'

// ["one", "two", "superduper", "dog"] => 'superduper'

// ["hello", "world"] => 'hello'

// const words1 = ['boo', 'a', 'I', 'hi']; //=> "boo"
// const words2 = ['one', 'two', 'superduper', 'dog']; //=> "superduper"
// const words3 = ['hello', 'world']; //=> "hello"

// function longestWord(arr) {
// // initialize length of word variable
//     let lgth = 0;
// // initialize longest word variable
//     let longest;
// // iterate through array
//     for (let i = 0; i < arr.length; i++) {
//  // compare the length of every iterated word in array with counter variable
// // if the current word while iterating is the new longest word...
//         if (arr[i].length > lgth) {
// // ... then assign it to the longest word variable
//             lgth = arr[i].length;
//             longest = arr[i];
//         }
//     }
// // return longest word
//     return longest;
// }

// console.log(longestWord(words1));
// console.log(longestWord(words2));
// console.log(longestWord(words3));

// Another solution

// const words1 = ['boo', 'a', 'I', 'hi']; //=> "boo"
// const words2 = ['one', 'two', 'superduper', 'dog']; //=> "superduper"
// const words3 = ['hello', 'world']; //=> "hello"

// function longestWord(arr) {
//     return arr.reduce((acc, word) => {
//         if (word.length > acc.length) acc = word;
//         return acc;
//     }, '');
// }

// console.log(longestWord(words1));
// console.log(longestWord(words2));
// console.log(longestWord(words3));

//---------------------------------------------------------------

// # Get Words Starting with Vowels

// Write a function that takes in a list of words. Return a list of words that
// start with a vowel.

// Vowels are `aeiou`. You don't have to worry about capital letters (although,
// it makes for a great bonus challenge).

// For example:

// ["elephant", "hello", "octopus"] => ['elephant', 'octopus']

// ["hi", "meow", "yay"] => []

// const words1 = ['elephant', 'hello', 'octopus'];
// const words2 = ['hi', 'meow', 'yay'];
// let newArr = [];

// function startsWithVowel(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i][0]);
//         if ('aeiou'.includes(arr[i][0]) === true) {
//             newArr.push(arr[i]);
//         } else {
//             console.log('no word starts with a vowel here');
//         }
//     }
//     return newArr;
// }

// console.log(startsWithVowel(words1)); //=> "elephant", "octopus"
// console.log(startsWithVowel(words2)); //=> 'no word starts with a vowel here'

// Another solution

// const words1 = ['elephant', 'hello', 'octopus'];
// const words2 = ['hi', 'meow', 'yay'];

// function returnWordsThatStartWithVowel(arr) {
//     return arr.filter((arr) => 'aeiou'.includes(arr[0]));
// }

// console.log(returnWordsThatStartWithVowel(words1)); //=> "elephant", "octopus"
// console.log(returnWordsThatStartWithVowel(words2)); //=> []

//---------------------------------------------------------------

// # More Evens or Odds?

// Write a function that takes in a list of numbers. If it has more even numbers
// than odd numbers, return `"even"`. If it has more odd numbers than even numbers,
// return `"odd"`. If there's a tie, return `"even and odd"`.

// function evenOrOdds(nums) {
//     let evensCount = 0;
//     let oddsCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             evensCount += 1;
//         } else {
//             oddsCount += 1;
//         }
//     }
//     if (evensCount > oddsCount) {
//         return 'even';
//     } else if (oddsCount > evensCount) {
//         return 'odd';
//     } else {
//         return 'even and odd';
//     }
// }

// console.log(evenOrOdds([1, 2, 3, 4, 5, 6, 8])); // even
// console.log(evenOrOdds([2, 3, 5, 7, 8, 9])); // odd
// console.log(evenOrOdds([3, 5, 4, 6])); // even and odd

//---------------------------------------------------------------

// # Remove Duplicates

// Write a function that takes in a list of numbers. The function should
// return a **new** list of those items, in the same order, but with any
// duplicates removed.

// For example:

// >>> remove_dupes([5, 5, 5])
// [5]

// >>> remove_dupes([1, 4, 1, 1, 3])
// [1, 4, 3]

// >>> remove_dupes([8, 11, 9])
// [8, 11, 9]

// function removeDuplicates(nums) {
//     let uniqueNums = [];
//     for (let i = 0; i < nums.length; i++) {
//         let duplicateNums = false;
//         for (let j = 0; j < uniqueNums.length; j++) {
//             if (nums[i] === uniqueNums[j]) {
//                 duplicateNums = true;
//                 break;
//             }
//         }
//         if (!duplicateNums) {
//             uniqueNums[uniqueNums.length] = nums[i];
//         }
//     }
//     return uniqueNums;
// }

// console.log(removeDuplicates([5, 5, 5])); //=> [5]
// console.log(removeDuplicates([1, 4, 1, 1, 3])); //=> [1, 4, 3]
// console.log(removeDuplicates([8, 11, 9])); //=> [8, 11, 9]

// Another solution

// function removeDupes(nums) {
//     const deDuped = [];

//     nums.forEach((num) => {
//         if (!deDuped.includes(num)) {
//             deDuped.push(num);
//         }
//     });
//     return deDuped;
// }

// console.log(removeDupes([5, 5, 5])); //=> [5]
// console.log(removeDupes([1, 4, 1, 1, 3])); //=> [1, 4, 3]
// console.log(removeDupes([8, 11, 9])); //=> [8, 11, 9]

// Another solution

// function removeDupes(nums) {
//     const seen = {};
//     const returnArr = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (!(nums[i] in seen)) {
//             returnArr.push(nums[i]);
//             seen[nums[i]] = true;
//         }
//     }

//     return returnArr;
// }

// console.log(removeDupes([5, 5, 5])); //=> [5]
// console.log(removeDupes([1, 4, 1, 1, 3])); //=> [1, 4, 3]
// console.log(removeDupes([8, 11, 9])); //=> [8, 11, 9]

//---------------------------------------------------------------

// # Replace Vowels

// Write a function that takes in a list of characters (single letter strings).
// The function should return the **same** list with characters, but all vowels
// replaced by a ```*```. Do not consider "y" a vowel, and be sure to consider
// both upper- and lower-case vowels.

// For example:

// >>> replace_vowels(['h', 'i'])
// ['h', '*']

// >>> replace_vowels(['o', 'o', 'o'])
// ['*', '*', '*']

// >>> replace_vowels(['z', 'z', 'z'])
// ['z', 'z', 'z']

//---------------------------------------------------------------

// # Show Even Numbers' Indices

// Write a function that takes in a list of numbers. The function should
// return a list of the indices of all numbers which are even.

// For example:

// >>> show_even_indices([2, 4, 6, 8])
// [0, 1, 2, 3]

// >>> show_even_indices([1, 2, 3, 4, 6, 8])
// [1, 3, 4, 5]

// >>> show_even_indices([7, 3, 11])
// []

//-----------------------------------------------------------------

// # Find Intersection

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

// Examples:

// Input: ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];
// Output: 1, 4, 13;

// Input: ['1, 3, 9, 10, 17, 18', '1, 4, 9, 10'];
// Output: 1, 9, 10;

// function FindIntersection(strArr) {
//     // code goes here
//     return strArr;
// }

// // keep this function call here
// console.log(FindIntersection(readline()));

//---------------------------------------------------------------

// # Staircase detail

// This is a staircase of size : n = 4;

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, n, denoting the size of the staircase.

// Constraints

//  0 < n <= 100.

// Output Format

// Print a staircase of size n using # symbols and spaces.

// Note: The last line must have  0 spaces in it.

// Sample Input

// 6

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.

//---------------------------------------------------------------

// # String Validators
