
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
console.log('a', fibonacciSequence(7));
