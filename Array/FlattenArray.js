
function flattenArray(arr){
    let flatArray = [];
    flattenArrayProg(arr,flatArray);
    return flatArray;
}
function flattenArrayProg(arr,flatArray){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] instanceof Array){
            flattenArrayProg(arr[i],flatArray);
        }
        else{
            flatArray.push(arr[i]);
        }
    }
}

let nestedArray = [1, [2, [3, [4]], 5], 6];
let arr = flattenArray(nestedArray);
console.log(arr);