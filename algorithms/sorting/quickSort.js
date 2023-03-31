function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let left = [],
        right = []
        pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [].concat(quickSort(left), pivot, quickSort(right))
    
} 

const array = [10, 2, -1, 4, -5, 8, 3, 6, 15]

console.log('quick sort:' , quickSort(array));