from functools import reduce

foo = 'udxsmpf'
alphabet = 'sxocqnmwpfyheljrdgui'
results = {
    'prepositions': 0,
    'verbs': {
        'regulars': 0,
        'subjunctives': 0
    },
    'numbers': {
        'pretties': 0
    }
}


def is_preposition(word):
    return len(word) == 6 and word[-1] in foo and 'u' not in word


def is_verb(word):
    return len(word) >= 6 and word[-1] not in foo


def is_subjunctive(word):
    return is_verb(word) and word[0] not in foo


def decrypt_number(number):
    return reduce(lambda a, b: a + b, [(20 ** index) * alphabet.find(char)
                                       for index, char in enumerate(number)])


def is_pretty(number):
    return number >= 81827 and number % 3 == 0


def decrypt(word):
    if is_preposition(word):
        results["prepositions"] += 1
    if is_verb(word):
        results["verbs"]["regulars"] += 1
    if is_subjunctive(word):
        results["verbs"]["subjunctives"] += 1


def custom_sort(text):
    return sorted(text, key=lambda word: [alphabet.index(c) for c in word])


def analyze(text):
    words = text.split(' ')
    non_duplicated = set(words)
    vocabulary = ' '.join(custom_sort(non_duplicated))

    [decrypt(word) for word in words]
    for word in non_duplicated:
        if is_pretty(decrypt_number(word)):
            results["numbers"]["pretties"] += 1

    print(f'1) There are {results["prepositions"]} prepositions in the text')
    print(f'2) There are {results["verbs"]["regulars"]} regular verbs in the text')
    print(f'3) There are {results["verbs"]["subjunctives"]} subjuctive verbs in the'
          ' text')
    print(f'4) Vocabulary list: {vocabulary}')
    print(f'5) There are {results["numbers"]["pretties"]} distinct pretty numbers in'
          ' the text')
