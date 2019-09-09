// Write your code here
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }

const fizzBuzz = () => {
	for (let i = 100; i > 0; i--) {
  	let print = ''
  	if (i % 3 === 0) print += 'Fizz'
    if (i % 5 === 0) print += 'Buzz'
    if (print) console.log(print)
    else console.log(i)
  }
}

const omit = (obj, ...params) => {
	params.map(param => {
  	delete obj[param]
  })
  
  return obj
}


fizzBuzz()

console.log(omit(obj, 'g'));
console.log(omit(obj, 'g', 'a', 'c')); 
