function factorialNumber(n){
    let acc = 1
    let control = n
    for (let i = 0; i < n; i++) {
        acc *= control
        control = control - 1
    }
    return acc
}
console.log(factorialNumber(4))