def reverseString(str):
    left = 0
    right = len(str) - 1

    while left < right:
        str[left], str[right] = str[right], str[left]

        left += 1
        right -= 1

string_to_reverse = ['a', 'm', 'i', 'g', 'o', 's']
reverseString(string_to_reverse)

print(string_to_reverse)
