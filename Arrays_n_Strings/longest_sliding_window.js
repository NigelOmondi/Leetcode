/* Finding the longest length of a sliding window with a targeted sum */

function findLength(arr, targetSum) {
    let left = 0;
    let currentSum = 0;
    let answer = 0;

    for ( let right = 0; right < arr.length; right++) {
        currentSum += arr[right];
        while (currentSum > targetSum) {
            currentSum -= arr[left];
            left++;
        }

        answer =  Math.max(answer, right - left + 1);
    }
    return answer;
}

let arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];
let targetSum = 8;
 
console.log(findLength(arr, targetSum));