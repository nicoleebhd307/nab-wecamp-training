/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = []
    let left = 0
    let right = nums.length - 1 

    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) { // so sánh giá trị tuyệt đối, số lớn nhất sẽ luôn nằm ngoài cùng 
            arr.push(nums[right] ** 2)
            right--
        } else {
            arr.push(nums[left] ** 2)
            left++
        }
    }
    let result = []
    for (let i = arr.length - 1; i>=0; i--){
        result.push(arr[i])
    }
    return result 
};