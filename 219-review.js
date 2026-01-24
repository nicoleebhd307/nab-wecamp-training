function containsNearbyDuplicate(nums, k){
    let set = new Set() // set save window of k elements 

    for (let i = 0; i<nums.length; i++){
        if (set.has(nums[i])){
            return true 
        } else {
            set.add(nums[i])
        }

        if (set.size > k){
            set.delete(nums[i-k]) // delete the first item of set if window is over k
        }
    }
    return false 
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,0,1,1], 2))
console.log(containsNearbyDuplicate([-1,2,-1], 2))
