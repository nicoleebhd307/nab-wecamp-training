/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc = true 
    let dec = true 
    for (let i = 0; i<nums.length; i++){
        if (nums[i] > nums[i+1]){
            inc = false
        } 
        else if (nums[i] < nums[i+1]){
            dec = false 
        }
    }
    return dec || inc 

};