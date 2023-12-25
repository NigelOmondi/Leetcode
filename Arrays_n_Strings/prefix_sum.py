def prefix_sum(nums, queries, limit) -> bool:
    # Initialize prefix sum array with the first element of nums
    prefix = [nums[0]]

    # Calculate prefix sums for the rest of the elements in nums
    for num in range(1, len(nums)):
        # Append the sum of the current element and the last calculated prefix sum
        prefix.append(nums[num] + prefix[-1])

    # Initialize an empty list to store the answers for each query
    ansArray = []

    # Iterate through each query tuple (x, y)
    for x, y in queries:
        # Calculate the sum of elements between indices x and y, inclusive at x and y
        # This is done by subtracting the prefix sum up to index x-1 from the prefix 
        # sum up to index y
        # and adding the value at index x to include it in the sum
        currentSum = prefix[y] - prefix[x] + nums[x]
        # Append the result of comparing the calculated sum with the limit to the answer array
        # If the sum is less than the limit, append True; otherwise, append False
        ansArray.append(currentSum < limit)

    # Return the array of answers for each query
    return ansArray

# Example usage
nums = [1, 6, 3, 2, 7, 2]
queries = [[0, 3], [2, 5], [2, 4]]
limit = 13

# Call the function and print the results
print(prefix_sum(nums, queries, limit))
