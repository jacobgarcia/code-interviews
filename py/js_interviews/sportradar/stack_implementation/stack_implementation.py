class Node():
    data = None
    next = None

    def __init__(self, data):
        self.data = data


class Stack():
    top = None
    next = None

    def push(self, data):
        node = Node(data)
        node.next = self.top
        self.top = node

    def pop(self):
        if (self.top is not None):
            self.top = next
            return self.top.data
        return None

    def list(self):
        list = []
        current = self.top
        while(current):
            list.append(current.data)
            current = current.next
        return list
