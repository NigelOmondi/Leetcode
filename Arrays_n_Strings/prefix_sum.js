function prefixSum(nums, queries, limit) {
    // Initialize prefix sum array with the first element of nums
    let prefix = [nums[0]];

    // Calculate prefix sums for the rest of the elements in nums
    for (let i = 1; i < nums.length; i++) {
        // Append the sum of the current element and the last calculated prefix sum
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    // Initialize an array to store the answers for each query
    let ansArray = [];

    // Iterate through each query array [x, y]
    queries.forEach(([x, y]) => {
        // Calculate the sum of elements between indices x and y, inclusive at x and y
        // This is done by subtracting the prefix sum up to index x-1 from the prefix 
        // sum up to index y
        // and adding the value at index x to include it in the sum
        let currentSum = prefix[y] - prefix[x] + nums[x];
        // Append the result of comparing the calculated sum with the limit to the answer array
        // If the sum is less than the limit, push true; otherwise, push false
        ansArray.push(currentSum < limit);
    });

    // Return the array of answers for each query
    return ansArray;
}

// Example usage
const nums = [1, 6, 3, 2, 7, 2];
const queries = [[0, 3], [2, 5], [2, 4]];
const limit = 13;

// Call the function and log the results
console.log(prefixSum(nums, queries, limit));
