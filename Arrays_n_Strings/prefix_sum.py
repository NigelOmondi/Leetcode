def prefix_sum(nums, queries, limit) -> bool:
    prefix = [nums[0]]

    for num in range(1, len(nums)):
        prefix.append(nums[num] + prefix[-1])

    ansArray = []

    for x, y in queries:
        currentSum = prefix[y] - prefix[x] + nums[x]
        ansArray.append(currentSum < limit)

    return ansArray

nums = [1, 6, 3, 2, 7, 2]
queries = [[0, 3], [2, 5], [2, 4]]
limit = 13

print(prefix_sum(nums, queries, limit))