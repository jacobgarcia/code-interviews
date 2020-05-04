from spot_on import vowel_count


def test_equal(x, y):
    if x == y:
        print('PASSED!!')
    else:
        print('Expected `{}` to equal `{}`'.format(x, y))


# o(n)
# DO NOT MODIFY BELOW THIS LINE!
test_equal(vowel_count('Ethan loves cheese'), 7)
test_equal(vowel_count('Ethan does NOT love cheese'), 10)
test_equal(vowel_count(''), 0)
