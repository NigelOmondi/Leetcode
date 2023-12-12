/* Find the number of subarrays that yield less than target product k */

function numOfSubarrayProductLessThanK(arr, k) {

    // return no subarrays if the target k is less than
    // or equal to 1
    if (k <= 1) {
        return 0;
    }

    let left = 0;
    let currentProduct = 1;
    let numOfSubarrays = 0;

    for ( let right = 0; right < arr.length; right++ ) {
        currentProduct *= arr[right];

        while (currentProduct >= k) {
            currentProduct /= arr[left];
            left++;
        }

        numOfSubarrays += right - left + 1;
    }
    return numOfSubarrays;

}

let arr = [10, 5, 2, 6];
let k = 100;

console.log(numOfSubarrayProductLessThanK(arr, k))