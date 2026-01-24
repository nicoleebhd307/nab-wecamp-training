
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = new Map()
    for (let i=0; i<nums.length; i++){
        map.set(nums[i], i) // Tạo map lưu [key,index]
    }
    for (let i =0; i<nums.length; i++){ // i: giá trị 1 cần tìm 
        let complement = target - nums[i] // complement giá trị 2 cần tìm 
        if (map.has(complement) && (map.get(complement)!==i)){
            return [i, map.get(complement)] // lấy value (=index) của giá trị phần bù 
        } 
    } 
}  
