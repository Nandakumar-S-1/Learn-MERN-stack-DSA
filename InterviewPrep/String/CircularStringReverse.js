// // function circularShiftString() {
// //   const input = 'aeiou';
// //   const result = [input];
// //   let current = input;
  
// //   // Perform circular shifts (first character to end) for all unique positions
// //   for (let i = 0; i < input.length - 1; i++) {
// //     current = current.slice(1) + current[0];
// //     result.push(current);
// //   }
  
// //   return result;
// // }

// // // Example usage
// // console.log(circularShiftString());


// function modifyArray(arr) {
//   if (arr.length === 0) return arr;
  
//   // Pass 1: Find last index of each number (O(n))
//   const lastIndex = new Map();
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!lastIndex.has(arr[i])) {
//       lastIndex.set(arr[i], i);
//     }
//   }
  
//   // Pass 2: Traverse left to right, track freq, check conditions (O(n))
//   const freq = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     // Check condition before adding current to freq
//     if (i > 0 && arr[i] % 2 === 0 && arr[i - 1] % 2 === 1 &&
//         (freq.get(arr[i - 1]) || 0) > 0 &&  // Duplicate check: appeared before i-1 (freq > 0 before adding i-1, but adjusted since freq includes up to i-1)
//         (i - 1 !== lastIndex.get(arr[i - 1]))) {
//       arr[i - 1] += 1;  // Make odd even
//     }
//     // Add current to freq
//     freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
//   }
//   return arr;
// }

// // Example usage
// const exampleArr = [1, 2, 3, 1, 4, 1, 5];
// console.log(modifyArray(exampleArr));  // Output: [1, 2, 3, 2, 4, 1, 5]