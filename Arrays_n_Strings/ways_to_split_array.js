/**
 * Function to count the number of ways to split an array into two non-empty parts
 * such that the sum of the first part is greater than or equal to the sum of the second part.
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} - The number of ways to split the array.
 */

function waysToSplitArray(nums) {
    // Get the length of the input array.
    const n = nums.length;  

    // Calculate prefix sums, where prefix[i] is the sum of nums[0] to nums[i].

     // Initialize the prefix sums array with the first element.
    const prefix = [nums[0]]; 
    for (let i = 1; i < n; i++) {
        // Add the current number to the previous prefix sum.
        prefix.push(nums[i] + prefix[i - 1]);  
    }

     // Initialize the count of valid splits.
    let ans = 0; 
    // Iterate through the array to find valid splits.
    for (let i = 0; i < n - 1; i++) {
         // Sum of the first part.
        const leftSection = prefix[i]; 

        // Sum of the second part (total sum minus the first part)
        const rightSection = prefix[n - 1] - prefix[i]; 

        // If the sum of the first part is greater than or equal to the second part, increment the count.
        if (leftSection >= rightSection) {
            ans++;
        }
    }

    // Return the count of valid splits.
    return ans;  
}

// Example usage:
console.log(waysToSplitArray([10, 4, -8, 7]));  // Output: 2
