def find_max_average(nums, k):
    """
    Finds a contiguous subarray whose length 
    is equal to k that has the maximum average value.

    Parameters:
    nums (List[int]): The input array.
    k (int): The length of the subarray.

    Returns:
    float: The maximum average value.
    """
    # Calculate the sum of the first 'k' elements
    max_sum = sum(nums[:k])
    current_sum = max_sum

    # Iterate over the array starting from the 'k'th element
    for i in range(k, len(nums)):

        # Update the sum by adding the next element 
        # and removing the first element of the previous window

        current_sum += nums[i] - nums[i - k]
        
        # Update the max_sum if the current sum is greater
        max_sum = max(max_sum, current_sum)

    return max_sum / k


print(find_max_average([1, 12, -5, -6, 50, 3], 4))
print(find_max_average([5], 1))
