/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // 2 non-decreasing order => return the minimum integer common # no common => return -1 
    let n1 = 0
    let n2 = 0
    while (n1<nums1.length && n2<nums2.length){
        if (nums1[n1] < nums2[n2]){
            n1++
        } else if (nums1[n1] > nums2[n2]){
            n2++
        } else if (nums1[n1] === nums2[n2]) {
            return nums1[n1]
        }
    }
    return -1

};