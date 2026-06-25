class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        total_subarrays = 0
        n = len(nums)
        
        for i in range(n):
            target_count = 0
            
            
            for j in range(i, n):
                if nums[j] == target:
                    target_count += 1
                
                subarray_length = j - i + 1
                
                
                if target_count > subarray_length // 2:
                    total_subarrays += 1
                    
        return total_subarrays