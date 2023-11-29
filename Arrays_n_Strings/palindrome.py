def check_if_string_is_palindrome(s: str) -> bool:
    s = s.lower() # convert input string to lowercase
    left = 0
    right = len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        
        left += 1
        right -= 1

    return True

print(check_if_string_is_palindrome('Repaper'))