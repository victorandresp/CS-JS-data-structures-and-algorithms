function powerOfTwo(n){
    if(n < 1){
        return false
    }
    while (n > 1) {
        if(n % 2 !== 0){
            return false
        }
        n = n / 2 // is a O(logn) because the n value is reduced to half in the algorithm
    }
    return true
}

console.log(powerOfTwo(2)); // Big-O = O(logn)