# Find the number of subarrays that yield less than target product k

def num_of_subarray_product_less_than_k(arr, k):
    # Return 0 if the target k is less than or equal to 1
    if k <= 1:
        return 0

    left = 0
    current_product = 1
    num_of_subarrays = 0

    for right in range(len(arr)):
        current_product *= arr[right]

        # Shrink the window until the product is less than k
        while current_product >= k:
            current_product /= arr[left]
            left += 1

        # Update the count of subarrays
        num_of_subarrays += right - left + 1
    
    return num_of_subarrays

arr = [10, 5, 2, 6]
k = 100

print(num_of_subarray_product_less_than_k(arr, k))
