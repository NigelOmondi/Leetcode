# This works for a sorted array
def findTarget(arr, target) -> bool:
    left = 0
    right = len(arr) - 1

    while left < right:
        currentSum = arr[left] + arr[right]
        if currentSum == target:
            return True
        if currentSum > target:
            right -= 1
        else:
            left += 1
    return False

print(findTarget([45, 67, 78, 80], 125))