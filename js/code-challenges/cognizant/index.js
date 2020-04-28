const printSequentually = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function(iLocal) {
        return function() {
          console.log(iLocal);
        };
      })(i),
      1000 + i
    );
  }
};

const createBase = n => {
  return a => {
    return n + a;
  };
};

const counter = () => {
  let _counter = 0;
  return {
    add: number => {
      _counter += number;
    },
    retrieve: () => {
      return _counter;
    }
  };
};

module.exports = {
  printSequentually,
  createBase,
  counter
};
