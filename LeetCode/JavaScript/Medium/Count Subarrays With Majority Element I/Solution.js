/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let totalSubarrays = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let targetCount = 0;
        
        for (let j = i; j < n; j++) {
            if (nums[j] === target) {
                targetCount++;
            }
            
            let subarrayLength = j - i + 1;
            // Target is the majority element if it appears strictly more than half the time
            if (targetCount > Math.floor(subarrayLength / 2)) {
                totalSubarrays++;
            }
        }
    }

    return totalSubarrays;
};