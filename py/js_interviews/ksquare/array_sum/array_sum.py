import functools
flatten_list = []


def flat_list(lst):
    for element in lst:
        if type(element) == list:
            flat_list(element)
        else:
            flatten_list.append(element)
    return flatten_list


def parse_list(lst):
    parsed_list = []
    for element in lst:
        try:
            number = float(element)
            parsed_list.append(number)
        except Exception:
            pass
    return parsed_list


def list_sum(list):
    return functools.reduce(lambda a, b: a + b, parse_list(flat_list(list)))
