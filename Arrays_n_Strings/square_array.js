function squareArray(nums) {
    squaredNums = nums.map(num => num * num).sort((a, b) => a-b);
    return squaredNums;
}

const nums = [-4, -1, 0, 3, 10];
console.log(squareArray(nums));