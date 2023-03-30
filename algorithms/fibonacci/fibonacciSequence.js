
function fibonacciSequence(n){
    const fibonacci = []
    for (let i = 0; i < n; i++) {
        if(i <= 1){
            fibonacci[i] = i
        }else{
            fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
        }
    }
    return fibonacci
}
console.log('My solution: ', fibonacciSequence(7)); // Big O = O(n)

// Course sollution
function fibonacciSequenceCourse(n){
    const fibonacci = [0,1]
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]   
    }
    return fibonacci
}
console.log('Course solution: ', fibonacciSequenceCourse(7)); // Big O = O(n)

function recursiveFibonacciSequence(n, array){
    if(!array){
        // console.log();
        const arrayNew = [0, 1]
        n = n-2
        return recursiveFibonacciSequence(n, arrayNew)
    }
    if(n === 0 || n <= 1){
        return array
    }
    array[array.length] = array[array.length-2] + array[array.length-1]
    return recursiveFibonacciSequence(n-1, array)
}

console.log('recursive', recursiveFibonacciSequence(7));