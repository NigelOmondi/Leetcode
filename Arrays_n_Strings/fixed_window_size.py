# Find the largest sum from all possible subarrays of fixed size

def finding_largest_sum_subarray(nums, k):
    subarraySum = 0
    ans = 0

    for i in range(k):
        subarraySum += nums[i]

    ans = subarraySum
    for j in range(k, len(nums)):
        subarraySum += nums[j] - nums[j - k]
        ans = max(ans, subarraySum)

    return ans

nums  = [3, -1, 4, 12, -8, 5, 6]
k = 4
print(finding_largest_sum_subarray(nums, k))