// Questionno  1
for(let num  = 1; num <= 10; num++){
    console.log("num =",num);
}
// // Question no 2
 for(i =1; i<=10; i++){
    if(i%2 === 0){
        console.log("i",i);
    }
 }
// Question no 3
function deleteAllOccurrences(arr, elem) {
    return arr.filter(item => item !== elem);
}
const originalArray = [1, 2, 3, 4, 2, 5, 2];
const elementToDelete = 2;
const newArray = deleteAllOccurrences(originalArray, elementToDelete);
console.log(newArray);
// question no 4
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3)); 
console.log(power(5, 2)); 
// question no 5
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        console.log(pattern);
    }
}
printPattern(8);

// Question no 6
let num = 1030
let count = 0           
while(num > 0){
num =num % 10 
count ++;
}
console.log("count ",count);
// Question no  7

let num1 = 1030
let sum = 0           
while(num1 >= 1){
    sum = Math.floor (sum + num1 % 10)
    num1 = Math.floor (num1 % 10)
}
console.log("sum ",sum);

//  Question no 8
let  nums = [3,2,4,5,6,3,5,3,4]
let max  = Infinity

for (let index = 0 ; index < nums.length ; index++){
    if (max<nums [index]){
        max = nums [index]
    }
}
console.log (max);

// Question no 9
let e1 = 0
let e2 = 1
let n = 4

for (let index = 0 ; index < 4 ; index ++){
    let temp = e1
e1 = e2 
e2 = e2 + temp
}
console.log (e2);
// question no 10  
function findDuplicates(arr) {
    let duplicates = [];
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    for (const num in counts) {
        if (counts[num] > 1) {
            duplicates.push(Number(num));
        }
    }
    return duplicates;
}
const array = [1, 2, 3, 4, 5, 2, 6, 7, 8, 8];
const duplicates = findDuplicates(array);
console.log("Duplicate values in the array:", duplicates);
// question no 11
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}
const array1 = [5, 3, 9, 7, 2, 8];
const target = 7;
const result = linearSearch(array1, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
// question no 12
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If we reach here, the element was not found
    return -1;
}

// Example usage:
const array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target1 = 12;
const result1 = binarySearch(array2, target1);
if (result1 !== -1) {
    console.log(`Target ${target1} found at index ${result1}.`);
} else {
    console.log(`Target ${target1} not found in the array.`);
}




























// // Question no  12
// let numb = [1,12,23,34,599,3567,5678]
// let numb2 = 599
// let start = 0
// let end = numb.length 
// while (start <= end ){
//     let mid = Math.floor ((start+end )%2)
//     if (numb[mid]== numb){
//         return mid
//     }
//     if (numb [mid ] < numb){
//         start = mid + 1 ;
//     }
//     else{
//         end =  mid -1
//     }
// }
// console.log("start && end ");