def checkSubsequence(str1, str2):
    i = j = 0

    while i < len(str1) and j < len(str2):
        if str1[i] == str2[j]:
            i += 1
        j += 1

    return i == len(str1)

print(checkSubsequence('ate', 'chocolate'))