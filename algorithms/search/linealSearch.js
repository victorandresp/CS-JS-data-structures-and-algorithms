function findIndex(arr, value){
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value)
            return index = i
    }
    return index
}
const array = [-2, 1, 3, 19, 20, 9]
console.log(findIndex(array, 99)) // Big-O = O(n)