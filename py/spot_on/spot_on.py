def vowel_count(str) -> int:
    vowels = 'aeiou'
    count = 0
    for char in str.lower():
        try:
            vowels.index(char)
            count += 1
        except ValueError:
            pass
    return count
