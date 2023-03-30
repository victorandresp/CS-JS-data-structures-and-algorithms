function factorialNumber(n){
    let acc = 1
    let control = n
    for (let i = 0; i < n; i++) {
        acc *= control
        control = control - 1
    }
    return acc
}
console.log('My solution: ',factorialNumber(4)) // Big O = O(n)

// Course solution 
function factorialNumberCourse(n){
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}
console.log('Course solution: ',factorialNumberCourse(4)) // Big O = O(n)

// recursive solution

function recursiveFactorialNumber(n){
 if(n === 0){
    return 1
 } 
    return n * recursiveFactorialNumber(n-1)
}

console.log('Course solution: ', recursiveFactorialNumber(4)) // Big O = O(n)