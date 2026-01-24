function findLHS(nums){
    let map = new Map()
    for (let i of nums){
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    }
    let max = 0
    let length = 0
    for (let [key, freq] of map){
        if (map.has(key +1)){
            length = freq + map.get(key+1)
            if (length > max) max = length
        }
    }
    
    return max 
}

console.log(findLHS([1,3,2,2,5,2,3,7])) //5 
console.log(findLHS([1,2,3,4])) //2
console.log(findLHS([1,1,1,1])) // 0
console.log(findLHS([2])) // 0
console.log(findLHS([1,-3,2,2,-5,-2,3,7,-1,-3,2,2,-5,-2,3,-7]))