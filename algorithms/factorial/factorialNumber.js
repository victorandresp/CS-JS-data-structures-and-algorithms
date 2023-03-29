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