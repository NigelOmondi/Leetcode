/*
 @param {string} str1 is the subsequent string
 @param {string} str2 is the orignal string
 @return {boolean}
 */
function checkSubsequence(str1, str2) {
    let i = j = 0;

    while (i < str1.length && j < str2.length) {
        if ( str1[i] == str2[j]) {
            i++;
        }
        j++;
    }

    return i == str1.length;
}

console.log(checkSubsequence('ai', 'manequin'))