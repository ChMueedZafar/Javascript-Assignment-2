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

// Example usage:
const originalArray = [1, 2, 3, 4, 2, 5, 2];
const elementToDelete = 2;
const newArray = deleteAllOccurrences(originalArray, elementToDelete);
console.log(newArray); // Output: [1, 3, 4, 5]



























// // Question no 6
// let num = 1030
// let count = 0           
// while(num > 0){
// num =num % 10 
// count ++;
// }
// console.log("count ",count);
// // Question no  7

// let num1 = 1030
// let sum = 0           
// while(num1 >= 1){
//     sum = Math.floor (sum + num1 % 10)
//     num1 = Math.floor (num1 % 10)
// }
// console.log("sum ",sum);

// //  Question no 8
// let  nums = [3,2,4,5,6,3,5,3,4]
// let max  = Infinity

// for (let index = 0 ; index < nums.length ; index++){
//     if (max<nums [index]){
//         max = nums [index]
//     }
// }
// console.log (max);

// // Question no 9
// let e1 = 0
// let e2 = 1
// let n = 4

// for (let index = 0 ; index < 4 ; index ++){
//     let temp = e1
// e1 = e2 
// e2 = e2 + temp

// console.log (e2);

// }


// console.log ("e2 ,afterloope, e2" )

























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