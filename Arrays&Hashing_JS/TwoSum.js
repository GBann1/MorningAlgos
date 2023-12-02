// Leetcode #1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {};

    for (let i=0; i<nums.length; i++){
        if(hashmap[target-nums[i]] !== undefined){
            return [i, hashmap[target-nums[i]]];
        }else{
            hashmap[nums[i]] = i;
        };
    };
    return false;
};