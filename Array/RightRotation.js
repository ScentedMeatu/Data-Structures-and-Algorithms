function rigthRotation(arr,k) {
    let arr1 = arr.slice(0, k+1);
    let arr2 = arr.slice(k+1, arr.length);
        arr = [...arr2, ...arr1];
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = rigthRotation(arr,2);
console.log(arr);