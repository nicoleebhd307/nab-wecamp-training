function containsNearbyDuplicate(nums, k) {
    for (let l = 0; l < nums.length; l++) {
        // r chỉ chạy trong phạm vi k và không vượt mảng
        for (let r = l + 1; r < nums.length && r - l <= k; r++) {
            if (nums[l] === nums[r]) {
                return true;
            }
        }
    }
    return false;
};
