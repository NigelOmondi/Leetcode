def squareArray(nums):
        # using list comprehension
        squared_nums = [num * num for num in nums]
        squared_nums.sort()
        return squared_nums

nums = [-4,-1,0,3,10]
print(squareArray(nums))
