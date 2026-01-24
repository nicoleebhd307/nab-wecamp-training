// given an integer array nums consisting n elements, and an integer k,
// find the contiguous subarray of length k that has the maximum average value
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.
function findMaxAverage(nums, k) {
    let max = - Infinity
    let left = 0 
    for (let right = k-1; right< nums.length; right++){
        let sum = 0
        for (let i=left; i<=right; i++){
            sum += nums[i]
        }
        let avg = sum/k
        if (avg > max){
            max = avg 
        }
        left ++
    }
    return max 
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverage([5], 1)) // 5.00000