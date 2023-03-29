
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