let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr1.concat(arr2, [7, 8, 9], 'Dez');
console.log(arr4);

let arr5 = [...arr1, ...arr2]; // Spread
console.log(arr5);

let arr6 = [...arr1, ...arr2, ...[7, 8, 9]];
console.log(arr6);