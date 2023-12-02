// Leetcode #217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // declare an opject
    const hashmap = {};

    // loop through array
    for (let i=0; i< nums.length; i++){
        // if element is NOT undefined, it must already exist
        if (hashmap[nums[i]] !== undefined){
            // stop looping and return true
            return true;
        }
        // if element IS undefined that means it does not exist
        else {
            // add the value to the hashmap
            hashmap[i] = nums[i];
        }
    }
    // if loop has completed without returning true, return false
    return false;
};

nums = [1,2,3,1];
console.log(containsDuplicate(nums));
nums = [1,2,3,4];
console.log(containsDuplicate(nums));
nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));