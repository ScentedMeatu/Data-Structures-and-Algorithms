function evenOddExc(arr){
    let curr;
    arr = arr.map((num,index)=>{
        if(arr.length%2===0&&index===arr.length-1){
            return num;
        }
        if(index===0){
            return num;
        }
        if(index%2!==0){
            curr = num;
            return arr[index+1];
        }
        if(index%2===0){
            return curr;
        }
    });
    return arr;
}

let arr = [0,1,2,3,4,5,6,7];
arr = evenOddExc(arr);
console.log(arr);
