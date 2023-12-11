/*
  What is the length of the longest substring
 achievable that contains only "1"?
*/

function findLength(s) {
    let left = 0;
    let currentZeros = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            currentZeros += 1;
        }

        while (currentZeros > 1) {
            if (s[left] === "0") {
                currentZeros -= 1;
            }
            left += 1;
        }
        
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(findLength('11011011'));
