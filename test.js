// return the smallest positive interger (>0) that not occur in A
function solution(A){
    arr = A.sort((a,b) => a-b)
    let set = new Set(arr)
    let i = 1 
    while (true){
        if (!(set.has(i))){
            return i
        }
        i++
    }
}
function solution1(A){
    let min= 1

    for (let i =0; i<A.length; i++){
        if (A[i] <= min){
            min = A[i]
        }
    }
    console.log(min)
}

array = [1,3,6,4,1,2]
console.log(solution1(array))

array = [-1, -3]
console.log(solution1(array))

array = [0,1,3]
console.log(solution1(array))