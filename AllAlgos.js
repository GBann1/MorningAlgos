// https://leetcode.com/problems/contains-duplicate/
// #217 Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i =0; i< nums.length;i++){
        for(let j = i+1; j< nums.length;j++){
            if (nums[i]===nums[j]){
                return true
            }
        }
    }
    return false
};
// Note: Without using any built-ins I believe this to be acceptable. If I were to use built-ins I would use .sort() and then with a single for loop compare nums[i] to nums[i+1].

function loop () {
    for(let i=0;i<31;i++){
        console.log(Math.pow(-2,i))
    }
}
loop()