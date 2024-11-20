function spliceAt(arr, n) {
    let bigArr = [];
    sliceAt(arr, n, bigArr);
    return bigArr;
}

function sliceAt(arr, n, bigArr) {
    let temp = arr.slice(0, n);
    arr.splice(0, n);
    bigArr.push(temp);
    if (arr.length >= n)
        sliceAt(arr, n, bigArr);
    else
        bigArr.push(arr);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = spliceAt(arr, 3);
console.log(arr);