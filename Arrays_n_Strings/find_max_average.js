function findMaxAverage(nums, k) {
    // Calculate the sum of the first 'k' elements
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    let currentSum = maxSum;

    // Iterate over the array starting from the 'k'th element
    for (let i = k; i < nums.length; i++) {
        // Update the sum by adding the next element 
        // and removing the first element of the previous window
        currentSum += nums[i] - nums[i - k];

        // Update the maxSum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
