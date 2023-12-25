def minStartValue(nums):
    startValue = 1  # Initial startValue
    running_sum = startValue

    for num in nums:
        running_sum += num
        # If running_sum is less than 1, adjust startValue
        if running_sum < 1:
            startValue += 1 - running_sum
            running_sum = 1

    return startValue

# Test the function with provided examples
print(minStartValue([-3, 2, -3, 4, 2]))  # Output: 5
print(minStartValue([1, 2]))             # Output: 1
print(minStartValue([1, -2, -3]))        # Output: 5
