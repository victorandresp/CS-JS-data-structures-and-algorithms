function insertionSort(arr){
    for (let i = 1; i < array.length; i++) {
        const numberToInsert = array[i];
        let = i - 1
        while (j>= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numberToInsert
    }
}
const arr = [8, 20, -2, 4, -6]
insertionSort(arr) // Big O = O(n^2)
console.log(arr)