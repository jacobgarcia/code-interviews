def omit(dic, *props):
    dic = dict(dic)
    for prop in props:
        del dic[prop]
    return dic
