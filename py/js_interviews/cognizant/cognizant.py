from threading import Timer


def print_sequentially():
    for i in range(3):
        Timer(1 + i, lambda i_local: print(i_local), ([i])).start()


def create_base(n):
    return lambda a: n + a


class Counter():
    counter = 0

    def add(self, n):
        self.counter += n

    def retrieve(self):
        return self.counter
