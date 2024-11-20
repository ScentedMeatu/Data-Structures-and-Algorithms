function halfExchange(arr) {
    let middle = arr.length % 2 === 0 ? (arr.length / 2) : ((arr.length - 1) / 2);
    let arr1 = arr.slice(0, middle);
    let arr2 = arr.slice(middle, middle * 2);
    arr.length % 2 === 0 ?
        arr = [...arr2, ...arr1] :
        arr = [...arr2, ...arr1, arr[arr.length - 1]];
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = halfExchange(arr);
console.log(arr);