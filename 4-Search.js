const search = function(item){
    for(let i = 0; i < this.length; i++){
        if(this[i] === item){
            return this[i];
        }
    
    }
}

Array.prototype.search = search;

console.log([1,2,3,4,5].search(3));


//const Linear Search
const linearSearch = function(arr,value){

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === value){
            console.log(arr[i]);
            return true;
        }
    }
    return -1;
  
}

const arr = [1,2,3,6,9,10,13,56];
linearSearch(arr,3);


//binary search
function binarySearch(arr,value){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === value){
            console.log(arr[mid]);
            return true;
        }
        else if(arr[mid] < value){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return false;
}

const result = binarySearch([1,2,3,4,5,6,7,8,9],9) ? "Element found " : "Element not found";
console.log(result);