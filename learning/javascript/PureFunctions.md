### Pure Functions

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

Pure functions return consistent results for identical inputs.
They do not modify external states or depend on mutable data.
Often used with immutable data structures to ensure reliability.
Their independence from external states makes them highly reusable.

Example of Impure Function 

```
function impureFunction(obj,value){
  obj.name=value;
  return obj;
}

const person = {
  name: 'Bobo'
};

const result = impureFunction(person,"John");
console.log({
  person,
  result
});
```

Example of Pure Function:
```
function pureFunction(obj,value){
  return {...obj,name:value};
}

const person2 = {
  name: 'Bobo'
};

const result2 = pureFunction(person2,"John");

console.log({
  person2,
  result2
});
```