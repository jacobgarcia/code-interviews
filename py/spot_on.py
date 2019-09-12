"""
Implement the vowel_count function so that it returns the number of English-language vowels in a string.
"""

def vowel_count(input_string):
    """
    Returns the number of vowels (a, e, i, o, u) in a string.
    
    Example:
    >>> vowel_count('I wonder how many vowels?')
    7
  
    """
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    string = input_string.lower()
    for letter in string:
        try:
            vowels.index(letter)
            count += 1
        except ValueError:
            pass
    return count
    
    
# o(n)
# DO NOT MODIFY BELOW THIS LINE!

def test_equal(x, y):
    if x == y:
        print('PASSED!!')
    else:
        print('Expected `{}` to equal `{}`'.format(x, y))

test_equal(vowel_count('Ethan loves cheese'), 7)
test_equal(vowel_count('Ethan does NOT love cheese'), 10)
test_equal(vowel_count(''), 0)

