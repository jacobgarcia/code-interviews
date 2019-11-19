const stackInterface = (numbers) => {
  const stack = new Stack();
  numbers.map((number, index) => {
    if (index % 2 !== 0) {
      stack.push(number)
    }
  })
  return stack.list();
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function(data) {
  const newNode = new Node(data);

  newNode.next = this.top;
  this.top = newNode;
}

Stack.prototype.pop = function() {
  if (this.top !== null) {
    const topItem = this.top.data;
    this.top = this.top.next;
    return topItem;
  }
  return null;
}

Stack.prototype.list = function() {
  let current = this.top;
  const list = []
  while (current) {
    list.push(current.data);
    current = current.next;
  }
  return list;
}

const processStack = (stringNumbers) => {
  return stackInterface(stringNumbers.split(' '));
}

console.log(processStack('1 2 3 4'));
