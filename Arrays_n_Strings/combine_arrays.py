# This functionn takes in two sorted arrays

def combineTwoArrays(arr1, arr2):
    combinedArray = []

    i = j = 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            combinedArray.append(arr1[i])
            i += 1
        else:
            combinedArray.append(arr2[j])
            j += 1

    while i < len(arr1):
        combinedArray.append(arr1[i])
        i += 1

    while j < len(arr2):
        combinedArray.append(arr2[j])
        j += 1

    return combinedArray


print(combineTwoArrays([6, 7, 23, 67], [3, 77, 103, 549]))