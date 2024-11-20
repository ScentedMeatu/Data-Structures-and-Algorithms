function missingNumber(arr){
    let expectedSum = ((arr.length+1)*(arr.length+2))/2;
    let originalSum = arr.reduce((a,b)=>a+b);
    return expectedSum-originalSum;
}

let arr = [1,2,3,5,6,7,8,9];
console.log(missingNumber(arr));