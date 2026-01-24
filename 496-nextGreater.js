/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = []
    let stack =[]
    let map = new Map()
    for (let i = 0; i<nums2.length;i++){
        current = nums2[i]
        while (stack.length && stack[stack.length -1] < current){
            let hasGreater = stack.pop()
            map.set(hasGreater, current)
        }
        stack.push(current)
    }
    for (let num of nums2){
        if (!map.has(num)){
            map.set(num, -1)
        }
    }
    for (let greater of nums1){
        res.push(map.get(greater))
    }
    return res 
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = []
    for (let i = 0; i<nums1.length; i++){
        let found = false 
        let mark = Infinity 
        for (let j = 0; j<nums2.length; j++){
            if (nums1[i] === nums2[j]){
                found = true 
                mark = nums2[j]
                continue 
            }
            if (found = true && nums2[j] > mark){
                mark = nums2[j]
                res.push(nums2[j])
                break 
            }
         }
         if (mark === nums1[i]){
            res.push(-1)
         }
    }
    return res 
};