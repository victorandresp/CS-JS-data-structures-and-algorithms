function binarySearch(arr, value){ // Maded my selft without kwoledgement
    if(!arr || arr.length === 0){
        return -1
    }

    const half = Math.ceil(arr.length / 2)

    if(array[half] === value){
        return array[half]
    }

    const startPointer = value > array[half] ? half : 0

    for (let i = startPointer; i < array.length; i++) {
        if(array[i] === value){
            return i
        }
        
    }

    return -1
}
const array = [-2, 1, 2, 4, 8, 10, 13] // for binary search, the array must mandatory be in order
console.log(binarySearch([], 55));

// Correct way
function correctBinarySearch(arr, value){
    let start = 0
    let end = arr.length - 1

    while(start <= end){
        let middle = Math.floor((start + end) / 2)
        if(arr[middle] === value){
            return middle
        }
        
        if(value > arr[middle]){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }

    return -1
}

const arraytest = [-2, 1, 2, 4, 8, 10, 13] // for binary search, the array must mandatory be in order
console.log('solve:', correctBinarySearch(arraytest, 8));

