// The outer loop runs n times, corresponding to the height of the pyramid.
// For each iteration of the outer loop, we'll print one line of the pyramid.
// The first inner loop adds spaces to the line. For the first line, we'll add n-1 spaces.
//For the second line, we'll add n-2 spaces, and so on.
// The second inner loop adds asterisks to the line. For the first line, we'll add 1 asterisk.
//For the second line, we'll add 2 asterisks, and so on.
// We print the constructed line.

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = ""; // to hold each line's characters

//   // Add spaces. Total spaces on each line = n - i
//   for (let j = 1; j <= n - i; j++) {
//     str += "";
//   }

//   // Add stars. Total stars on each line = i
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }

//   console.log(str);
// }

// let a = 5;
// for (let i = 1; i <= a; i++) {
//   let str = ''
//   for (let j = 1; j <= i; j++) {
//    str += "*"
//   }
//   console.log(str)
// }

//Q Return integer sum

// const isIterate = (arg) => {
//   let intCount = 0;
//   for (let i = 0; i < arg.length; i++) {
//       if (Array.isArray(arg[i])) {
//           intCount += isIterate(arg[i]);
//       } else {
//           if (Number.isInteger(arg[i])) {
//               intCount += arg[i];
//           }
//       }
//   }
//   return intCount;
// }

// const arr = [1, 5, 71, 1, [12, '41', [12, '14']], '623', 5, [5, '42'], 51];

// console.log(isIterate(arr));