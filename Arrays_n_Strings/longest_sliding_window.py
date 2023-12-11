def find_length(arr, target_sum):
    left = 0
    current_sum = 0
    answer = 0

    for right in range(len(arr)):
        current_sum += arr[right]
        while current_sum > target_sum:
            current_sum -= arr[left]
            left += 1

        answer = max(answer, right - left + 1)
    
    return answer

arr = [3, 1, 2, 7, 4, 2, 1, 1, 5]
target_sum = 8

print(find_length(arr, target_sum))
