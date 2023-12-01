/* Works with a sorted array
-----------------------------
 @param {number []} array arr
 @param {number} target
 @return {boolean}
 */

function findTargetedSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let currentSum = arr[left] + arr[right];
        
        if (currentSum == target) {
            return true;
        }
        if (currentSum > target) {
            right--;
        } else {
            left++;
        }
    
    }
    return false;
}

console.log(findTargetedSum([35, 42, 46, 73, 99], 88))