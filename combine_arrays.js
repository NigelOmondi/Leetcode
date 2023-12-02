function combineArrays(arr1, arr2) {
    let combinedArray = [];

    let i = j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combinedArray.push(arr1[i]);
            i++;
        } else {
            combinedArray.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        combinedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combinedArray.push(arr2[j])
        j++;
    }
    return combinedArray
}

console.log(combineArrays([1, 2, 5, 8], [8, 12, 14, 67]));