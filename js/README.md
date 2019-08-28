# Interview JS Questions

## Node
-   What is an event in Node JS?<br/>
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
-   What is Node?<br/>
Node.js is server-side scripting based on Google’s V8 JavaScript engine. It is used to build scalable programs, especially web applications that are computationally simple but are frequently accessed.
-   What is NPM?<br/>
Stands for Node Package Manager. npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
-   What is Yarn?<br/>
A fast, reliable, and secure alternative npm client. With Yarn, engineers still have access to the npm registry, but can install packages more quickly and manage dependencies consistently across machines or in secure offline environments.
-   Multi-threading in NodeJS<br/>
Node.js does not support multithreading because each application is run on a single thread
-   Child process in Node<br/>
We can easily spin a child process using Node’s child_process module and those child processes can easily communicate with each other with a messaging system.
The child_process module enables us to access Operating System functionalities by running any system command inside a, well, child process.
-   Filesystem<br/>
The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
-   HTTP Module<br/>
The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses — the user is able to stream data.
-   OS Module<br/>
The os module provides a number of operating system-related utility methods. It can be accessed using:
-   Path Module<br/>
The path module provides utilities for working with file and directory paths.
-   Stream Module<br/>
A stream is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface.
-   NPM Packages that I use the most<br/>
  - request
  - react
  - express
  - moment
  - prop-types
  - vue
  - axios
  - webpack
  - uuid
  - body-parser
- Exports Function<br/>
Allows access to run code that resides on other files.
- CI/CD Tools<br/>
  - Travis CI
  - Jenkins

## Express
-   Middleware in Express<br/>
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.

## JS
-   What is async programming?
An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).
-   Async Vs Threads
  - It is very difficult to write code that is thread safe. With asyncronous code, you know exactly where the code will shift from one task to the next and race conditions are therefore much harder to come by.
  - Threads consume a fair amount of data since each thread needs to have its own stack. With async code, all the code shares the same stack and the stack is kept small due to continuously unwinding the stack between tasks.
  - Threads are OS structures and are therefore more memory for the platform to support. There is no such problem with asynchronous tasks.
-   Reduce<br/>
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
-   Filter<br/>
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
-  Map<br/>
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
-   Arrow Functions<br/>
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords.
-   TDD in NodeJS<br/>
Unit tests typically make up the majority of test suites. NodeJS best framework is Mocha
-   Arrow Functions VS Function Declaration<br/>
Arrow functions and function declarations / expressions are not equivalent and cannot be replaced blindly.
If the function you want to replace does not use this, arguments and is not called with new, then yes.
-   Callbacks VS Promises VS Async/Await<br/>
  - Callback: A callback is a function that is passed to another function. When the first function is done, it will run the second function.
  - Promises: Promises try to fix the callback hell
  - Async/Await: Syntactic sugar for promises
-  Async/Await<br/>
A special syntax to work with promises in a more comfortable fashion
-  ES6 Most Important Features:
  - Default Parameters foo(a = 10)
  - Template Literals `I am ${here}`
  - Multi-line Strings
  - Block Scope for Let and Const
  - True Classes
  - forEach, map, filter, reduce
  - Arrow Functions
  - Improved Object Literals { title, author }
  - Destructuring ...object
  - Promises (but I prefer async/await)
- What is a closure?
A closure is the combination of a function and the lexical environment within which that function was declared
- Scope in JS
  - Global
  - Local
  - Blocks
  - Context
  - Closures
- Schema VS Model<br/>
  Data model is the definition, the database schema the implementation.

# Redux
-   Reducers<br/>
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
-   Actions<br/>
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

## Mongo
-   How to define Schema?<br/>
Mongoose
-   How to define model?<br/>
Does not depend on tech
