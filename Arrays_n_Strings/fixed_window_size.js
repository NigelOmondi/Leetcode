/* Find the largest sum from all possible subarrays of fixed size */

function findingLargestSumSubarray(nums, k) {
    let subarraySum = 0;
    let ans = 0;

    for (let i = 0; i < k; i++) {
        subarraySum += nums[i];
    }

    ans = subarraySum;

    for (let j = k; j < nums.length; j++) {
        subarraySum += nums[j] - nums[j - k];
        ans = Math.max(ans, subarraySum);
    }

    return ans;
}

let nums = [3, -1, 4, 12, -8, 5, 6];
let k = 4;

console.log(findingLargestSumSubarray(nums, k));
