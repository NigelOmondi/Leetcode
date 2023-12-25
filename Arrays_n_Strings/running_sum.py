def running_sum(nums):
    # Loop through the array starting from the second element
    for i in range(1, len(nums)):
        # Add the previous element's running sum to the current element
        nums[i] += nums[i - 1]
    
    # Return the modified list which now contains the running sums
    return nums

# Example usage:
print(running_sum([1, 2, 3, 4]))  # Output: [1, 3, 6, 10]
print(running_sum([1, 1, 1, 1, 1]))  # Output: [1, 2, 3, 4, 5]
print(running_sum([3, 1, 2, 10, 1]))  # Output: [3, 4, 6, 16, 17]
