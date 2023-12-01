/**
 * @param {string} s - the string to check if it's a palindrome
 * @return {boolean}
 * 
 */

 function palindrome(s) {
    s = s.toLowerCase()
    left = 0;
    right = s.length -1;

    while (left < right) {
        if (s[left] != s[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
 }
 console.log(palindrome('Rotavator'))