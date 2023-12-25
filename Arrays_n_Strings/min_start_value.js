function minStartValue(nums) {
    let startValue = 1;  // Initial startValue
    let runningSum = startValue;

    for (let num of nums) {
        runningSum += num;
        // If runningSum is less than 1, adjust startValue
        if (runningSum < 1) {
            startValue += 1 - runningSum;
            runningSum = 1;
        }
    }

    return startValue;
}

// Test the function with provided examples
console.log(minStartValue([-3, 2, -3, 4, 2]));  // Output: 5
console.log(minStartValue([1, 2]));             // Output: 1
console.log(minStartValue([1, -2, -3]));        // Output: 5
