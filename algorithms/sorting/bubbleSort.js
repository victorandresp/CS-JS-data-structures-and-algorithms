function bubbleSort(arr){
    let swapped
    
    do {
        swapped = false
        for (let i = 0; i < arr.length -1; i++) {
            if(arr[i] > arr[i+1]){
                const temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
                swapped = true
            }
        }        
    } while (swapped);
    return arr

}

const array = [10, 2, -1, 4, -5, 8, 3, 6, 15]

const sortedArray = bubbleSort(array) // BigO = O(n^2)

console.log(sortedArray);