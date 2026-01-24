function twoSum(numbers, target){
    let left = 0
    let right = numbers.length -1 

    while (left < right){
        let sum = numbers[left] + numbers[right]
        if (sum > target){
            right --
        } else if (sum === target){
            return [left +1, right+1]
        } else {
            left ++
        }
    }

}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,7,7,15], 9))
console.log(twoSum([-7, -2,-1,15], 8))

console.log(twoSum([-1,0], -1))