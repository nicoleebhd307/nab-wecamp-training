// a positive integer N is given
// the goal is to find the highest power of 2 that divides N
// for example, N=24 => result K=3 since 2^3 = 8 is the hiighest power of 2 that devides N 
function findHighestPower(N){ 
    
    let max = 0
    for (let k=0; k<N; k++){
        if (N%(2**k) === 0){
            max = k
        }
    }
    return max 
}

console.log(findHighestPower(24)) // 3
console.log(findHighestPower(36)) // 2
console.log(findHighestPower(7))  // 0