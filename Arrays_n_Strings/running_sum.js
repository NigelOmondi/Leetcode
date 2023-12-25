function runningSum(nums) {
    // Initialize a variable to store the length of the array
    const n = nums.length;

    // Loop through the array starting from the second element
    for (let i = 1; i < n; i++) {
        // Add the previous element's running sum to the current element
        nums[i] += nums[i - 1];
    }

    // Return the modified array which now contains the running sums
    return nums;
}

// Example usage:
console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // Output: [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // Output: [3, 4, 6, 16, 17]
