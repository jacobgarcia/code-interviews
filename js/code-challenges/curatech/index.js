// 1. Sum
const sum(a, b) => a + b

// 2. Test API
const testApi = () => {
  try {
    const response = await fetch(`https://api.github.com/users/jacobgarcia`);
    const data = await response.json()
    console.log(data)
  }
  catch (err) {
    console.error(err)
  }
}

// 3. JWTAuthentication
class JWTAuthentication {
  constructor(){
    this.data = data
  }

  signIn() {
    return
  }

  signUp() {
    return
  }

  signOut() {
    return
  }

  static create() {
    console.log('bar')
  }
}

JWTAuthentication.create()

//4. Fibonacci
// Iterative O(n)

const iterative = (n) => {
  const a = 1, b = 0, temp

  while (num >= 0){
    temp = a
    a += b
    b = temp
    num--
  }

  return b;
}

// Recursive O(2^n)
const recursive = (n) => {
  if (num <= 1) return 1
  return recursive(num - 1) + recursive(num - 2);
}

// Memoization O(2n)
const memoization = (n, mem) => {
  mem = mem || {}

  if (mem[n]) return mem[n]
  if (n <= 1) return 1

  return mem[n] = memoization(n - 1, mem) + memoization(n - 2, mem);
}

// Linear O(1) - The Binet Formula
const fibonacci = (n) => {
    const SQROOTFIVE = Math.sqrt(5)

    const Phi = (1 + SQROOTFIVE)/2
    const phi = (1 - SQROOTFIVE)/2

    return Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / SQROOTFIVE);
}
