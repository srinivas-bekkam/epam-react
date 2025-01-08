## Opps related design pattern


- Creational Design Patterns

    - Singleton Pattern

    - Factory Method Pattern

    - Abstract Factory Pattern

    - Builder Pattern

    - Prototype Pattern

- Structural Design Patterns

    - Adapter Pattern

    - Decorator Pattern

    - Facade Pattern

    - Proxy Pattern

- Behavioral Design Patterns

    - Chain of Responsibility Pattern

    - Iterator Pattern

    -  Observer Pattern

___


###  Singleton Pattern

Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects. It is nothing but a way of defining a class. Class is defined in such a way that only one instance of the class is created in the complete execution of a program or project. 

Best cases to use Singleton Patterns
- Logging Service
- Managing Shared Resources
- Database Instances
- Cache library

Class based Singleton

```
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = this;
    }
  }
  getName() {
    return this.id;
  }
  setName(value) {
    this.id = value;
  }
}
let instance1 = new Singleton();
let instance2 = new Singleton();
console.clear();
console.log(instance1 === instance2); // returns true
```


Function based singleton
```
const Singleton = (function () {
  let _instance;

  function createInstance() {
    return {
      setName:function(value){
        this.name=value
      },
      getName:function(){
        return this.name;
      }
    }
  }
  return {
    getInstance: function () {
      if (!_instance) {
        _instance = createInstance();
      }
      return _instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
instance1.setName("Srinivas")

const instance2 = Singleton.getInstance();

console.clear()
console.log(instance1 === instance2); // true
console.log(instance2.getName()) // it returns name value set with instance1 as both point to same reference
```


Factory Patterns

The Factory Design Pattern is a creational design pattern that provides a way to create objects without specifying the exact class of the object that will be created. It involves creating a factory method that decides which class to instantiate based on the input or configuration. It is used when all the object creation and its business logic we need to keep at one place.

The main advantage factory design pattern is its ability to decouple the creation of an object from one particular implementation.
<!-- 
```
const Type = {
  STAFF: "STAFF",
  CLIENT: "CLIENT"
};
class StaffProfile {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.type = Type.STAFF;
  }
}
class ClientProfile {
  constructor(name, id, staffId) {
    this.name = name;
    this.id = id;
    this.type = Type.CLIENT;
    this.assignedStaff = staffId;
  }
}
class ProfileFactory {
  constructor() {}
  createStaff(name, id) {
    return new StaffProfile(name, id);
  }
  createClient(name, id, assignedStaffId) {
    return new ClientProfile(name, id, assignedStaffId);
  }
}
const factory = new ProfileFactory();
const staff = factory.createStaff("srinvas", 1);
console.log(staff);
const client = factory.createClient("john", 22, staff.id);
console.log(client);

``` -->
```

function createProfile(name, email) {
  return {
    name: name,
    email: email,
    getName: function () {
      return this.name;
    }
  };
}

var john = createProfile("john", "john@gmail.com");
var andy = createProfile("andy", "andy@gmail.com");
console.clear()
console.log(john.getName());
console.log(andy.getName());


```

Benefits of Factory Function in Refactoring:

**Single Point of Change**: By using a factory function, you centralize the object creation process. Refactoring or extending logic requires changes in one place rather than throughout the codebase.

**Simplifies Client Code**: Client code that consumes the factory function remains unchanged, even as the complexity of the object creation process increases.

**Encapsulation**: The factory function encapsulates any additional logic (e.g., caching, default parameters, or new object types). This prevents duplication of logic in multiple places and reduces the risk of errors during refactoring.

**Maintainability**: As your code grows, maintaining a factory function becomes much easier than refactoring direct instantiation. With a factory function, you can introduce new features, make optimizations, or fix bugs without affecting the rest of the code.


### Abstract Factory pattern

```
class Payroll {
  calculatePayroll() {
    throw new Error("this must be overridden");
  }
}

class HourlyPayroll extends Payroll {
  calculatePayroll() {
    return "hourly payroll calculated";
  }
}

class MonthlyPayroll extends Payroll {
   calculatePayroll() {
    return "Salaried payroll calculated";
  }
}
const Type={
  HOURLY:"HOURLY",
  SALARIED:"SALARIED"
}
class PayrollFactory{
  constructor(type){
    this.type=type
  }
  generatePayroll(){
    if(this.type==Type.HOURLY){
      return new HourlyPayroll().calculatePayroll()
    }else if(this.type==Type.SALARIED){
      return new MonthlyPayroll().calculatePayroll()
    }
  }
}
console.clear();
console.log(new PayrollFactory(Type.HOURLY).generatePayroll());
console.log(new PayrollFactory(Type.SALARIED).generatePayroll());

```
### Builder Pattern

The builder pattern is a creational design pattern that applies to situations when we have to design or construct objects that have multiple creational steps with lots of complexity.

The builder pattern allows us have a base class that we can always refer back to and pick out methods that are always available from the base class, orchestrate their calls and generally come up with a more direct, simple way of constructing the target class.

```
class ProfileBuilder {
  constructor(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
    return this;
  }
  setId(id) {
    this.id = id;
    return this;
  }
  build() {
    return `name: ${this.name}, email: ${this.email}`;
  }
}
let output = new ProfileBuilder("srinivas")
  .setEmail("sribek@gmail.com")
  .setId(1)
  .build();
console.log(output);

```

### Prototype Pattern
The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that’s native to JavaScript, and can be accessed by objects through the prototype chain.

```
const Profile = function (name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
};
Profile.prototype.setEmail = function (email) {
  this.email = email;
};
Profile.prototype.getEmail = function () {
  return this.email;
};
var profile = new Profile("sri");
console.log(profile.getName());
profile.setEmail("sribek@gmail.com");
console.log(profile.getEmail());

```

### Decorator Pattern
Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

```
class Television {
  constructor() {
    this.price = 1000;
  }
  getPrice() {
    return this.price;
  }
}

class DiscountDecorator {
  constructor(discount) {
    this.discount = discount;
  }

  getDiscount(product) {
    let price = product.getPrice();
    let discount = this.discount / 100;
    let totalValue = price - price * discount;
    return totalValue.toFixed(2);
  }
}
let prod = new Television();
let discountProvider = new DiscountDecorator(33.33);
console.clear();
console.log(discountProvider.getDiscount(prod));

```

### Adapter Pattern
Allows the interface of an existing class to be used as another interface.

```
function Person(name, heightInCms) {
  return {
    name,
    heightInCms,
    getName: function () {
      return this.name;
    },
    getHeight: function () {
      return this.heightInCms;
    },
    toString() {
      return `name: ${this.name}, Height: ${this.heightInCms}`;
    }
  };
}

function NewPerson(name, heightInInch) {
  return {
    name,
    heightInInch,
    getName: function () {
      return this.name;
    },
    getHeight: function () {
      return this.heightInInch;
    },
    toString() {
      return `name: ${this.name}, Height: ${this.heightInInch}`;
    }
  };
}

class PersonAdapter {
  constructor(personInCms) {
    this.personInCms = personInCms;
  }
  adapt() {
    return NewPerson(
      this.personInCms.getName(),
      this.personInCms.getHeight() / 2.54
    );
  }
}

let john = Person("john", 175);

let PeopleDetailsInInches = [];

let srinivas = NewPerson("Sri", 71);
PeopleDetailsInInches.push(srinivas);
PeopleDetailsInInches.push(new PersonAdapter(john).adapt());

```

### Observer Pattern

Defines a one-to-many dependency between objects, where one object (the subject) notifies its dependents of any state changes.

```
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observer = new Observable();

function consoleObserver(data) {
  console.log(data);
}
function alertObserver(data) {
  alert(data);
}

observer.subscribe(consoleObserver);
observer.subscribe(alertObserver);
console.clear();
observer.notify("alert");
observer.unsubscribe(alertObserver);
observer.notify("console");

```

### Strategy Pattern

Strategy Method or Strategy Pattern in JavaScript helps solve the problem of needing to use different methods or behaviors in your code and easily switch between them. Strategy Method is a behavioral design pattern in JavaScript that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the client to choose an algorithm from a family of algorithms at runtime, without altering the code that uses these algorithms.

```
class Strategy {
  calculateDiscount(orderTotal) {
  }
}
class ZeroDiscount extends Strategy {
  calculateDiscount(orderTotal) {
    return 0;
  }
}
class TenPercentDiscount extends Strategy {
  calculateDiscount(orderTotal) {
    return orderTotal * 0.1;
  }
}


class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    const orderTotal = this.items.reduce((total, item) => total + item.price, 0);
    return orderTotal - this.discountStrategy.calculateDiscount(orderTotal);
  }
}
const noDiscount = new ZeroDiscount();
const tenPercentDiscount = new TenPercentDiscount();

console.clear();
const cart1 = new ShoppingCart(noDiscount);
cart1.addItem({ name: 'Item 1', price: 50 });
console.log('Cart 1 Total:', cart1.calculateTotal());

const cart2 = new ShoppingCart(tenPercentDiscount);
cart2.addItem({ name: 'Item 1', price: 50 });
console.log('Cart 2 Total:', cart2.calculateTotal());


```

### Iterator Pattern
The iterator pattern allows access to the elements in a collection without exposing its underlying representation.

```
class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

export default Iterator;

```
[Codepen Example](https://codepen.io/srinivas-bekkam/pen/QwLQNrq?editors=0011)
___