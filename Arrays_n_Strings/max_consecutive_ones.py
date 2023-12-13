def longestOnes(nums, k):
    left = 0  # Initialize the left pointer of the window
    max_length = 0  # Keep track of the maximum length of the subarray
    zeros_count = 0  # Count the number of zeros in the current window

    # Iterate through the array using the right pointer
    for right in range(len(nums)):
        # If the current element is 0, increment the zero count
        if nums[right] == 0:
            zeros_count += 1

        # If the number of zeros exceeds k, shrink the window from the left
        while zeros_count > k:
            # If the leftmost element is 0, decrement the zero count
            if nums[left] == 0:
                zeros_count -= 1
            # Move the left pointer to the right
            left += 1

        # Update the maximum length of the subarray found so far
        # The length of the current window is (right - left + 1)
        max_length = max(max_length, right - left + 1)

    # Return the maximum length of the subarray found
    return max_length

# Use Case Scenarios
nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
k1 = 2
output1 = longestOnes(nums1, k1)

nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
k2 = 3
output2 = longestOnes(nums2, k2)

print(output1)  # Output: 6 (Longest subarray with at most 2 zeros)
print(output2)  # Output: 10 (Longest subarray with at most 3 zeros)
