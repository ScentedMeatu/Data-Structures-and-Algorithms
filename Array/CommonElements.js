function commonElements(arr1,arr2){
    let newArr = [];
    for(let ele of arr1){
        if(arr2.indexOf(ele)!==-1){
            newArr.push(ele);
        }
    }
    return newArr;
}

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [1,3,5,7]
let arr = commonElements(arr1,arr2);
console.log(arr);