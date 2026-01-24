// given an integer array nums consisting n elements, and an integer k,
// find the contiguous subarray of length k that has the maximum average value
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.
function findMaxAverage(nums, k) {
    let max = - Infinity
    let sum = 0
    for (let i=0; i<k; i++){
        sum += nums[i] // total sum of first k elements 
    }
    max = sum / k // max = first window value 
    let left = 0
    for (let right = k; right< nums.length; right++){
        sum = sum - nums[left] + nums[right]
        let avg = sum / k
        if (avg > max){
            max = avg
        }
        left ++
    }       
    return max 
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))