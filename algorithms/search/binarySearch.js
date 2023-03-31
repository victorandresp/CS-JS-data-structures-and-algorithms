function binarySearch(arr, value){
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