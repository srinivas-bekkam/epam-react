## New hooks

Following are some new hooks introduced by react 18

- useActionState
- useCallback
- useContext
- useDebugValue
- useDeferredValue
- useEffect
- useId
- useImperativeHandle
- useInsertionEffect
- useLayoutEffect
- useMemo
- useReducer
- useRef
- useState
- useTransition


### useActionState
useActionState is a Hook that allows you to update state based on the result of a form action.


Example:

```
import { useActionState, useState } from "react";

async function increment(previousState, formData) {
  return {
    ...previousState,
    firstNameError:
      formData.get("firstname").length > 5 ? "Max 5 Characters Allowed" : "",
  };
}
let initial = {
  increment: 0,
  firstNameError: "",
};
export function StatefulForm({}) {
  const [firstname, setFirstName] = useState("");
  const [state, formAction, isPending] = useActionState(increment, initial);
  return (
    <div className="formComponent">
      <form action={formAction}>
        <div className="input-container">
          <label htmlFor="firstname">First name </label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
          <br />
          <span style={{ color: "red" }}>{state.firstNameError}</span>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

```

[CodeSandbox Example](https://codesandbox.io/p/sandbox/cnfcsz?file=%2Fsrc%2FApp.js%3A9%2C36)


### useCallback
useCallback is a React Hook that lets you cache a function definition between re-renders.

```
function ProductPage({ productId, referrer, theme }) {
  // Every time the theme changes, this will be a different function...
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }
  
  return (
    <div className={theme}>
      {/* ... so ShippingForm's props will never be the same, and it will re-render every time */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

### useContext
useContext is a React Hook that lets you read and subscribe to context from your component.

```
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
```

#### Updating data passed via context 

Often, you’ll want the context to change over time. To update context, combine it with state. Declare a state variable in the parent component, and pass the current state down as the context value to the provider.

```
function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button onClick={() => {
        setTheme('light');
      }}>
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}

```



###  useDebugValue
useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.

Example: 
```
 import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
```
###  useId
useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.


Example: 
```
 import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

```

### useFormStatus
useFormStatus is a Hook that gives you status information of the last form submission. This hook is added in react 19.

```
const { pending, data, method, action } = useFormStatus();
```

#### Parameters 
useFormStatus does not take any parameters.

#### Returns 
A status object with the following properties:

_pending_: A boolean. If true, this means the parent `<form>` is pending submission. Otherwise, false.

_data_: An object implementing the FormData interface that contains the data the parent `<form>` is submitting. If there is no active submission or no parent `<form>`, it will be null.

_method_: A string value of either 'get' or 'post'. This represents whether the parent `<form>` is submitting with either a GET or POST HTTP method. By default, a `<form>` will use the GET method and can be specified by the method property.

_action_: A reference to the function passed to the action prop on the parent `<form>`. If there is no parent `<form>`, the property is null. If there is a URI value provided to the action prop, or no action prop specified, status.action will be null.

Example:

```
import { useFormStatus } from "react-dom";
import action from './actions';

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}
```

### useDeferredValue
useDeferredValue is a React Hook that lets you defer updating a part of the UI.

#### How it works?
During the initial render, the deferred value will be the same as the value you provided.

During updates, the deferred value will “lag behind” the latest value. In particular, React will first re-render without updating the deferred value, and then try to re-render with the newly received value in the background.

#### Use Case Scenario:

You can also apply useDeferredValue as a performance optimization. It is useful when a part of your UI is slow to re-render, there’s no easy way to optimize it, and you want to prevent it from blocking the rest of the UI.

Example:

Imagine you have a text field and a component (like a chart or a long list) that re-renders on every keystroke:

```

import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList.js';

export default function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}

```

### useEffect
useEffect is a React Hook that lets you synchronize a component with an external system.

```
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  // ...
```



### useImperativeHandle

useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.

Example:
```
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});
```
In above example we created two methods `focus` and `scrollIntoView` which is exposed to parent function which it can used to perform custom task.

Now, if the parent component gets a ref to MyInput, it will be able to call the focus and scrollIntoView methods on it. However, it will not have full access to the underlying `<input>` DOM node.

### useInsertionEffect

useInsertionEffect allows inserting elements into the DOM before any layout Effects fire.

example
```
useInsertionEffect(setup, dependencies?)
```

If you use CSS-in-JS, we recommend a combination of the first two approaches (CSS files for static styles, inline styles for dynamic styles). We don’t recommend runtime `<style>` tag injection for two reasons:

- Runtime injection forces the browser to recalculate the styles a lot more often.
- Runtime injection can be very slow if it happens at the wrong time in the React lifecycle.

The first problem is not solvable, but useInsertionEffect helps you solve the second problem.

Call useInsertionEffect to insert the styles before any layout Effects fire:

```
// Inside your CSS-in-JS library
let isInserted = new Set();
function useCSS(rule) {
  useInsertionEffect(() => {
    // As explained earlier, we don't recommend runtime injection of <style> tags.
    // But if you have to do it, then it's important to do in useInsertionEffect.
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      document.head.appendChild(getStyleForRule(rule));
    }
  });
  return rule;
}

function Button() {
  const className = useCSS('...');
  return <div className={className} />;
}

```

### useLayoutEffect

useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

useLayoutEffect can hurt performance. Prefer useEffect when possible.

Example
```
function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0); // You don't know real height yet

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // Re-render now that you know the real height
  }, []);

  // ...use tooltipHeight in the rendering logic below...
}
```
Here’s how this works step by step:

- Tooltip renders with the initial tooltipHeight = 0 (so the tooltip may be wrongly positioned).
- React places it in the DOM and runs the code in useLayoutEffect.
- Your useLayoutEffect measures the height of the tooltip content and triggers an immediate re-render.
- Tooltip renders again with the real tooltipHeight (so the tooltip is correctly positioned).
- React updates it in the DOM, and the browser finally displays the tooltip.

### useMemo
useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

Example:
```
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

On the initial render, useMemo returns the result of calling calculateValue with no arguments.

During next renders, it will either return an already stored value from the last render (if the dependencies haven't changed), or call calculateValue again, and return the result that calculateValue has returned.

### useReducer
useReducer is a React Hook that lets you add a reducer to your component.

syntax : 
```
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
Example :

```
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

```
Comparing useState and useReducer 
Reducers are not without downsides! Here’s a few ways you can compare them:

- Code size: Generally, with useState you have to write less code upfront. With useReducer, you have to write both a reducer function and dispatch actions. However, useReducer can help cut down on the code if many event handlers modify state in a similar way.
- Readability: useState is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, useReducer lets you cleanly separate the how of update logic from the what happened of event handlers.
- Debugging: When you have a bug with useState, it can be difficult to tell where the state was set incorrectly, and why. With useReducer, you can add a console log into your reducer to see every state update, and why it happened (due to which action). If each action is correct, you’ll know that the mistake is in the reducer logic itself. However, you have to step through more code than with useState.
- Testing: A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.
- Personal preference: Some people like reducers, others don’t. That’s okay. It’s a matter of preference. You can always convert between useState and useReducer back and forth: they are equivalent!

### useRef
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

Example:

```
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

```

### useState
useState is a React Hook that lets you add a state variable to your component.

Example:

```
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```

The convention is to name state variables like [something, setSomething] using array destructuring.

useState returns an array with exactly two items:

- The current state of this state variable, initially set to the initial state you provided.
- The set function that lets you change it to any other value in response to interaction.

To update what’s on the screen, call the set function with some next state:
Example:
```
function handleClick() {
  setName('Robin');
}
```
React will store the next state, render your component again with the new values, and update the UI.

### useTransition
useTransition is a React Hook that lets you update the state without blocking the UI.

syntax:
```
const [isPending, startTransition] = useTransition()
```
Transitions let you keep the user interface updates responsive even on slow devices.

With a Transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.
 Example:

 ```
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
 ```