"""
What is the length of the longest substring
achievable that contains only "1"?
"""

def find_Length(s):
    left = 0
    currentZeros = 0
    answer = 0

    for right in range(len(s)):
        if s[right] == "0":
            currentZeros += 1

        while currentZeros > 1:
            if s[left] == "0":
                currentZeros -= 1
            left += 1
        answer = max(answer, right - left + 1)
    return answer

print(find_Length('11011011'))