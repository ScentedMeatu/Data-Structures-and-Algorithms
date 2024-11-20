function moveZerosToEnd(arr) {
    let zeros = 0;
    for (let i = 0; i < arr.length;) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            zeros++;
        }
        else {
            i++;
        }
    }
    while (zeros > 0) {
        arr.push(0);
        zeros--;
    }
}

arr = [1, 0, 2, 4, 5, 0, 0, 6, 0];
moveZerosToEnd(arr);
console.log(arr);