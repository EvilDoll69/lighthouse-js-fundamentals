/*const sayHello = function (name) {
  console.log("Hello " + name);
}

sayHello("Petro");*/

// CONSOLE.LOG

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

// RETURN

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("John");
console.log(greeting);
