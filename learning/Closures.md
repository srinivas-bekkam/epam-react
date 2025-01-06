## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

Example #1:
```
    function init() {
        var name = "Srinivas"; // name is a local variable created by init
        function displayName() {
            // displayName() is the inner function, that forms a closure
            console.log(name); // use variable declared in the parent function
        }
        displayName();
    }
    init();
```
Example #2:
```
    function init() {
        var name = "Srinivas"; // name is a local variable created by init
        function displayName() {
            // displayName() is the inner function, that forms a closure
            console.log(name); // use variable declared in the parent function
        }
        return displayName;
    }
    const instance = init(); // install will have inner function reference
    
    instance();// this will return "Srinivas"

```
Codepen Examples:
This site was built using [Closure Example Codepen](https://codepen.io/srinivas-bekkam/pen/ZYzXbZy).
