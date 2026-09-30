class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = nums.length; j >= 0; j--){
                if(j !== i && nums[i] === nums[j]) {
                    return true
                } 
            }
        }
        return false
    }
}
