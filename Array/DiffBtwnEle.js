function differenceBetweenEle(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i+1])
            newArr.push(arr[i+1]-arr[i]);
    }
    return newArr;
}

let arr = [10,15,10,25,10,35];
arr = differenceBetweenEle(arr);
console.log(arr);