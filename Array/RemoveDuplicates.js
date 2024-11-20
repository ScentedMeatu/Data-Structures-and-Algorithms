// function removeDuplicates(arr){
//     let newArr = [];
//     for(let ele of arr){
//         if(!newArr.includes(ele)){
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }

let arr = [1,2,2,4,5,6,4,9,10,10];
arr = [...new Set(arr)];
// arr = removeDuplicates(arr);
console.log(arr);