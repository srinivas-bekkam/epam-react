**Interviewee**: Abhilash Chawan (Unverified)

Questions asked by Nanda (S&P)
1) Previous project architecture?

---
2) What are the hooks ?

React Hooks are functions that allow you to "hook into" React state and lifecycle features from function components, making it easier to write components without using class components. They were introduced in React 16.8 and have become a fundamental part of modern React development.
Examples:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useImperativeHandle
- useLayoutEffect
- useDebugValue

---
3) How to improve the performance of the application ?
Answer ->
    - Avoid Unnecessary Re-renders
    - Lazy Loading and Code Splitting
    - Optimize State Management
    - Minimize Reconciliation
    - Optimize Resource Loading
    - Optimize Rendering with useEffect and useLayoutEffect
    - Debouncing and Throttling
    -  Profiling and Monitoring



---
4) Write HTML to display cards side by side ?

---

5) Usememo vs. use callback ?
---

6) About React.lazy?
---
7) Next.js basic concepts ?
---
8) About common components ?
Answer: 

    In React, common components refer to reusable UI elements or features that are shared across different parts of the application. These components help ensure consistency, reduce code duplication, and improve maintainability by abstracting common functionality into isolated, modular pieces.
    Examples:
    - Button
    - Input Field
    - Card
    - Modal

---
9) About performance loading ?

        1. Lazy Loading Components
        2. Code Splitting
        3. Reduce JavaScript Bundle Size
        4. Use a Content Delivery Network (CDN)
        5. Preload Critical Resources
        6. Optimize Images
        7. Service Workers and Caching
        8. Reduce the Number of HTTP Requests
        9. Server-Side Rendering (SSR)
        10. Use Web Workers
        11. Minimize CSS and Font Load Times
        12. Optimize Web Vitals


--- 
10) HOC and custom hooks implementation?

---

**Interviewee**: Abhilash Chawan (Unverified)

S&P Ratings Client round 2 question asked by Satish Kumar.
 
1) What are the different module systems.

Module systems are a way of organizing and structuring code in a way that allows parts of an application (or library) to be written in separate, reusable files. These systems are designed to help developers manage dependencies, ensure modularity, and make the code more maintainable.

-  CommonJS (CJS)

    CommonJS is a synchronous module system primarily used in Node.js, although it can also be used in the browser with bundlers like Webpack or Browserify.

- ES Modules (ESM)

    ES Modules (ECMAScript Modules) is the official module system in JavaScript, standardized by ECMAScript. It is designed for both the browser and Node.js (since version 12), and it supports both synchronous and asynchronous imports.

- AMD (Asynchronous Module Definition)

    AMD is a module system designed for the browser. It allows modules to be loaded asynchronously, making it more suitable for client-side applications.

- UMD (Universal Module Definition)

    UMD is a module format that combines the best features of AMD and CommonJS, allowing the module to work in both environments (browser and Node.js).

- SystemJS

    SystemJS is a module loader that supports loading ES modules, AMD, and CommonJS modules in the browser and Node.js.

- CJS/ESM Hybrid (in Node.js)
    In Node.js (since version 12), there has been an effort to support both CommonJS and ES Modules together. 

---

2) Login screen design authentication and authorization.

---


3) Promise vs Observables.

---

4) Normalisation techniques in database.

---

5) About MFE.

    MFE stands for Micro Frontends, a design pattern in which a large, monolithic frontend application is broken down into smaller, more manageable pieces called micro frontends. Each of these micro frontends is a self-contained, independent unit that can be developed, deployed, and maintained separately, while still working together as part of a larger application.
    Advantages: 
    - Advantages of Micro Frontends
    - Independent Deployment
    - Technology Agnostic
    - Team Autonomy
    - Faster Development
    - Improved Maintainability

---

6) Difference between mock/stub/spy.

- Mock
    A mock is a test double that not only simulates the behavior of a dependency (like a function or object) but also allows you to assert how it is used during the test. Mocks are primarily used to verify interactions between the unit under test and its dependencies.

    ```
    test('should call the save method once', () => {
        const mockSave = jest.fn();
        const user = new User(mockSave);

        user.save();

        expect(mockSave).toHaveBeenCalledTimes(1); // Verifies that the method was called exactly once
    });
    ```
- Stub 
    A stub is a simpler version of a mock. It is used to replace a function or method with a predefined response, allowing you to simulate different conditions or behaviors. Stubs do not track or verify interactions, and they are typically used when you want to isolate your unit test by providing controlled responses from dependencies.

    ```
    test('should return user name', () => {
    const getUserName = jest.fn().mockReturnValue('John Doe'); // Stub that returns a fixed value
    const name = getUserName();
    expect(name).toBe('John Doe'); // Verifies the stubbed return value
    });
    ```
- Spy

    A spy is a test double that allows you to observe the behavior of a real function or method without modifying it. It "spies" on the function's calls and provides information on how it was used, like the arguments, the return value, or how many times it was called. Unlike mocks, which can be configured to change behavior, spies are used to observe interactions with existing implementations.

    ```
    test('should call the callback function', () => {
    const callback = jest.fn(); // Creates a spy function
    doSomething(callback);

    expect(callback).toHaveBeenCalled(); // Verifies the spy was called at least once
    expect(callback).toHaveBeenCalledWith('some argument'); // Verifies it was called with specific argument
    });
    ```


---

7) About SOILD principles.

    The SOLID principles are a set of five object-oriented design principles that help software developers write more maintainable, flexible, and scalable code. These principles aim to guide developers in structuring their classes, methods, and objects to achieve better code quality and minimize issues like tight coupling, poor code reusability, and difficulty in making changes.

    - Single Responsibility Principle (SRP)
        
        Definition: A class should have only one reason to change, meaning that a class should have only one job or responsibility

    - Open/Closed Principle (OCP)

        Definition: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

    - Liskov Substitution Principle (LSP)

        Definition: Objects of a superclass should be replaceable with objects of its subclass without affecting the correct behavior of the program.

    - Interface Segregation Principle (ISP)

        Definition: Clients should not be forced to depend on interfaces they do not use. Instead of having one large, all-encompassing interface, it's better to break down interfaces into smaller, more specific ones.

    - Dependency Inversion Principle (DIP)

        Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details. Details should depend on abstractions.

---

8) How to Implement offers in the E-commerce sites



---


Interview - CI - Round-1
Client - SNP
Interviewers - mahesh komuravelli, subramanyam cheekati
 
1) Questions on previous projectss

---

2) Angular vs React

---

3) what is state and effects of state change on the UI?

    State in React refers to a built-in object that stores data or information about the component's current situation. Each component can have its own state, and when the state changes, React will re-render the component and update the UI to reflect the changes.

    - Re-rendering the Component
    - Component Recalculation
    - UI Update (Repainting)
    - Side Effects (via useEffect)

---




4) Optimizing methods for a large list of child components?


    - Use React.memo for Functional Components
    - Virtualization / Windowing
    - Lazy Loading / Pagination
    - Key Prop Optimization
    - Avoid Inline Functions and Object Creation Inside Render
    - Batching State Updates
    - Optimize List Rendering with Conditional Rendering
    - Use useCallback and useMemo Hooks for Optimization






---


5) How to pass state form child component to other components in the component tree?

- Lifting State Up
- Using Context API
- Using Redux (State Management Library)
- Using Props and Callbacks (for Direct Parent-Child Communication)
- Using Event Emitters (Advanced Use Case)

---

6) how to make Responsive UI?

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}



---

7) nodejs vs reactjs

---

8) key components in redux.

    - Store
    - Actions
    - Action Creators
    - Reducers
    - Dispatch
    - Selectors
    - Middleware
    -  Provider (React-Redux)
    - DevTools
---

9) crossbrower css issues

    Cross-browser compatibility issues in CSS occur when a webpage or application looks or behaves differently across various web browsers (like Chrome, Firefox, Safari, Edge, etc.). This happens because browsers may interpret or render CSS rules differently, resulting in inconsistencies. Below are some common cross-browser CSS issues and strategies to address them:

    - Box Model Differences
    - Vendor Prefixes

        A CSS feature might not work in all browsers without specific prefixes (e.g., -webkit-, -moz-, -ms-, -o-).

        ```
        .element {
            display: -webkit-flex; /* Safari */
            display: -moz-flex;    /* Firefox */
            display: flex;         /* Standard */
        }
        ```
    - Font Rendering

        ```
        /* For WebKit browsers (Chrome, Safari, etc.) */
        body {
            -webkit-font-smoothing: antialiased;
        }

        /* For Firefox */
        body {
            -moz-osx-font-smoothing: grayscale;
        }
        ```
    - Flexbox and Grid Layouts
        ```
        /* Flexbox fallback */
        .container {
        display: -webkit-flex; /* Safari */
        display: flex;
        }

        /* Grid fallback */
        .container {
        display: -ms-grid;  /* IE 10/11 */
        display: grid;
        }
        ```

    - Positioning
    - Background Images and Gradients
        ```
        /* Gradient with multiple vendor prefixes */
        background: -webkit-linear-gradient(to right, #ff7e5f, #feb47b); /* Safari */
        background: -moz-linear-gradient(to right, #ff7e5f, #feb47b);    /* Firefox */
        background: linear-gradient(to right, #ff7e5f, #feb47b);         /* Standard */
        ```
    - Forms and Inputs
    - CSS Transitions and Animations
        ```
        .element {
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease; /* Safari */
        -moz-transition: all 0.3s ease;    /* Firefox */
        }
        ```
    - Opacity and RGBA Colors
    - Hover and Focus States
    - CSS Grid on Older Browsers

---

10) Any idea about Agile methodology

---

11) Do you Accessibility ?

    Accessibility (A11y) refers to the practice of making websites and web applications usable for all people, including those with disabilities. It involves designing and coding in a way that ensures people with visual, auditory, motor, or cognitive impairments can access, understand, and interact with your content. Accessibility also promotes an inclusive environment where everyone, regardless of ability or disability, can participate fully in digital experiences.

    - Semantic HTML
    - Alt Text for Images
    - Keyboard Accessibility
    - Color Contrast
    - Accessible Forms
    - ARIA (Accessible Rich Internet Applications)
    - Focus Management
    - Text Alternatives for Multimedia
    - Skip Navigation Links
    - Accessible Rich Interactions
    - Testing Accessibility
    - WCAG Guidelines

---

12) Authentication and authorization process.

---

13) describe your approach and List the components for user resgistration from?

The registration form should be designed with the following principles in mind:

Simplicity: 
- Only ask for necessary information. A shorter form is less intimidating and improves completion rates.

Security: 
- Protect sensitive information such as passwords.

Accessibility: 
- Ensure the form can be navigated and understood by all users, including those with disabilities.

Feedback: 
- Provide immediate feedback for errors, success, and form status (e.g., loading or submission progress).

Responsiveness: 
- Ensure the form works across different screen sizes (mobile, tablet, desktop).


---

14) React.memo and useCallback

---

15) Lifecycle methods 

---

16) how to catch runtime errors in react

---


Harshavardhan Reddy3
15/11/24 22:30


Interview - CI - Round-2
Client - SNP
Interviewers - Venkat Chintalapati
 
1) Anugular vs React

---

2) What are props in reacts?

---

3) what are higher order components?

---

4) Do you know design patterns and what is your favorite design pattern and why is it your favorite?

---

5) do you know Micro front-ends

---

6) Any idea about Agile methodology?follow up about SAFe Framework.

---

7) which ci/cd work flow you follow?

---

8) How do you maintain the quality of the code?

    - Adhering to Best Practices
    -  Writing Clean Code
    - Conducting Code Reviews
    - Writing and Maintaining Tests
    - Using Static Analysis Tools
    - Refactoring Regularly
    
---

- What best practices should be followed when integrating and utilizing third-party components, such as AG Grid, in a React application? What key considerations should be taken into account?

    Answer:

    - Compatibility
    - Features
    - Documentation
    - Community and Support:


---

- What are the main differences between Redux and Redux Toolkit? What advantages does Redux Toolkit provide over traditional Redux?

Answer:

| **Feature** | **Redux (Traditional)** | **Redux Toolkit (RTK)** |
| --- | --- | --- |
| **Boilerplate Code** | Requires a lot of boilerplate for actions, reducers, and store configuration. | Significantly reduces boilerplate with utilities like `createSlice`. |
| **State Immutability** | Requires explicit handling of immutability (e.g., using `spread` or libraries). | Uses **Immer.js** internally for automatic immutability. |
| **Action Creation** | Actions must be manually created using `action.type` strings and creators. | Automatically generates actions with `createSlice`. |
| **Middleware Setup** | Middleware (e.g., `redux-thunk`) must be added manually. | Pre-configures middleware like `redux-thunk`. |
| **Store Configuration** | Must manually combine reducers and apply middleware. | Simplifies store setup with `configureStore`. |
| **Best Practices** | Relies on developers to follow best practices manually. | Enforces Redux best practices by design. |
| **RTK Query** | Not available. | Built-in tool for managing data fetching and caching. |


---


How do async functions work in conjunction with promises in JavaScript? Can you provide an example to illustrate their interaction?

Answer: 

How Async Functions Work with Promises
In JavaScript, async functions provide a simpler and cleaner way to work with asynchronous code, effectively building on top of Promises. Here’s how they interact:

Async Function Behavior:

Declaring a function with the async keyword makes it return a Promise implicitly, regardless of whether you explicitly return a promise or a value.
If the function returns a value, it is wrapped in a resolved promise.
If an error is thrown, it is converted into a rejected promise.
Await Keyword:

The await keyword can only be used inside an async function.
It pauses the execution of the function until the promise is resolved or rejected, allowing you to write asynchronous code that looks synchronous.
The resolved value of the promise is returned to the code after await.

---

What are the key differences between arrow functions and traditional function expressions in JavaScript regarding syntax and behavior?

Answer:

| **Aspect** | **Arrow Functions** | **Traditional Functions** |
| --- | --- | --- |
| **Syntax** | Concise with `=>`. | Requires `function` keyword. |
| **`this` Binding** | Lexically bound to the enclosing context. | Dynamically bound based on how it’s called. |
| **`arguments` Object** | Not available; use rest parameters. | Available as a special object. |
| **Constructors** | Cannot be used as constructors. | Can be used with `new`. |
| **Suitability for Methods** | Not suitable for object methods. | Suitable for object methods. |
| **Super in Classes** | Inherits `super` from enclosing context. | Must explicitly use `super` inside methods. |

Both have their place in modern JavaScript, with arrow functions often preferred for concise, non-method functions, and traditional functions better suited for methods and constructor use.

___


How reacts works explain?

Summary of How React Works:
- Component-Based: Build UI as small, reusable pieces.
- JSX: Write UI with HTML-like syntax inside JavaScript.
- Virtual DOM: Efficiently update the real DOM by comparing changes in memory.
- State and Props: Manage data (state) and pass data between components (props).
- Hooks: Manage state and lifecycle methods in functional components.
- Unidirectional Data Flow: Ensures data flows from parent to child components.
- Efficient Updates: React updates only what is necessary by comparing the Virtual DOM with the real DOM.

React’s architecture allows for building interactive and high-performance UIs while keeping the development process clean and manageable. It abstracts away complex DOM manipulations and provides a powerful model for building dynamic, data-driven user interfaces.

___


 what are the different ways to rerender a component?

 Answer

 Summary: The main ways to trigger a re-render in React are:

- State Changes (useState or this.setState)
- Prop Changes
- Force Update (forceUpdate in class components)
- Context Value Changes (useContext)
- Key Prop Changes (in lists)
- Hook changes (useReducer, useCallback, useMemo)
- Parent State Changes that affect children via props
- Routing Changes (React Router)

___


Is it possible to modify the props that are passed to children from children component?

Answer:

No, in React, props are read-only. This means that you cannot modify the props directly inside a child component. Props are meant to be passed down from a parent component to a child component, and the child is not supposed to change the props it receives. This one-way data flow helps maintain predictable and consistent behavior in your React app.

Why Props Are Read-Only?
- Unidirectional Data Flow: React follows a unidirectional data flow (from parent to child). Props ensure that data flows in one direction, which simplifies debugging and testing.
- Predictability: By preventing children from modifying their props, React makes the component hierarchy more predictable and easy to understand.
- Reactivity: If children could modify their props, it could cause unpredictable state changes that break the reactive rendering model of React.

___


What is the use of tsconfig.json file what do we write in it?

The tsconfig.json file is a configuration file used by TypeScript to specify the settings for how the TypeScript compiler should process the code in a project. It defines various compiler options, the files or directories to include or exclude, and other settings that help control how TypeScript transpiles your code into JavaScript.

Key Purposes of tsconfig.json:
- Compiler Options: It specifies how the TypeScript compiler should behave.
- File Inclusion/Exclusion: It defines which files should be included or excluded from the compilation process.
- Type Checking: It configures various rules for type checking and error reporting.
- Project Structure: It can specify project structure for monorepos or multi-package setups.
- Module Resolution: It configures how modules should be resolved when importing them.

Example:
```
{
  "compilerOptions": {
    "target": "es5",                   // Specifies the target JavaScript version (e.g., es5, es6, esnext)
    "module": "commonjs",              // Specifies the module system (e.g., commonjs, es6, amd)
    "lib": ["dom", "esnext"],          // Specifies the libraries to include in the project (e.g., DOM, ESNext)
    "allowJs": true,                   // Allows JavaScript files to be compiled
    "checkJs": true,                   // Enables type-checking on JavaScript files
    "strict": true,                    // Enables all strict type-checking options
    "esModuleInterop": true,           // Ensures compatibility with common JavaScript modules
    "skipLibCheck": true,              // Skips type checking of declaration files (.d.ts)
    "forceConsistentCasingInFileNames": true, // Ensures consistent file casing across imports
    "outDir": "./dist",                // Specifies the output directory for compiled JavaScript files
    "rootDir": "./src",                // Specifies the root directory of the source files
    "moduleResolution": "node",        // Specifies how modules get resolved (e.g., node, classic)
    "resolveJsonModule": true          // Allows importing JSON files as modules
  },
  "include": ["src/**/*"],             // Specifies the files/folders to be included in the project (e.g., all files in the src folder)
  "exclude": ["node_modules", "dist"],  // Specifies files/folders to exclude from the compilation
  "extends": "./base-tsconfig.json",   // Extends another configuration file (if necessary)
  "files": ["src/index.ts"],           // Specifies specific files to include
  "references": []                     // Allows referencing other TypeScript projects (useful for monorepos)
}

```
___

We have 10 api calls and if we want to intercept that request and add headers how can we do it ?(axios instance and interceptors)?

```

// Add request interceptor to add headers globally
axiosInstance.interceptors.request.use(
  (config) => {
    // Add headers here (e.g., authentication token, content-type, etc.)
    const token = localStorage.getItem('authToken'); // Example: Get token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add Authorization header
    }
    config.headers['Custom-Header'] = 'CustomValue'; // Add custom headers if necessary
    return config;
  },
  (error) => {
    return Promise.reject(error);  // If there is an error before the request is sent
  }
);
```

---

Communication between components and how many ways?

Answer:

Summary of Communication Methods:
- Parent to Child: Use props to pass data.
- Child to Parent: Use callback functions.
- Sibling to Sibling: Use lifting state up or global state management (e.g., Redux, Context API).
- Unrelated Components: Use Context API or global state management (e.g., Redux, MobX).
- Event Emitters: For non-UI components or non-parent-child relationships.
-  Refs: For manipulating child component methods or DOM elements directly.

---

what is difference between borderbox vs contentbox?

| Feature | `content-box` | `border-box` |
| --- | --- | --- |
| **Default behavior** | Yes | No  |
| **Width includes...** | Only content | Content + padding + border |
| **Total size grows?** | Yes (with padding/border) | No (size stays fixed) |


**content-box calculation:** 

Total width = 200px (content) + 40px (padding) + 20px (border) = 260px

**boder-box calculation:**

Total width = 200px, with content adjusted to:

Content width = 200px - (40px padding + 20px border) = 140px

---

How to achieve css browser compatibility?

Answer:

- Use Modern CSS with Fallbacks.
    
     Always provide fallbacks for CSS properties not supported in older browsers.
    
    Example:

        ```
        background: #000; /* Fallback for older browsers */
        background: linear-gradient(to right, #000, #fff); /* Modern browsers */

        ```

- Use Vendor Prefixes
    ```
    .example {
        -webkit-transform: rotate(45deg); /* Safari/Chrome */
        -moz-transform: rotate(45deg);   /* Firefox */
        -ms-transform: rotate(45deg);    /* IE */
        transform: rotate(45deg);       /* Standard */
    }
    ```

- Utilize Feature Queries (@supports)
    ```
    @supports (display: grid) {
        .container {
            display: grid;
        }
    }
    ```

- Graceful Degradation
    - Ensure that your website remains functional even without advanced features.
    - Example: If CSS Grid isn't supported, use flexbox as a fallback.


- Progressive Enhancement
    - Start with a basic layout and enhance the design with advanced CSS features where supported.

- Test Across Browsers

    Use tools to test your site in different browsers:
    - BrowserStack: Cross-browser testing tool.
    - Can I Use: Check browser compatibility for CSS features.
    - DevTools: Built-in tools in browsers like Chrome, Firefox, and Edge.

- Polyfills
    - Use JavaScript or CSS polyfills for unsupported features.
    - Example: The Modernizr library detects browser support and applies fallbacks.

- Global Reset or Normalize.css

- Avoid Deprecated/Experimental Features

- Follow Browser Market Trends


---


 Flexbox vs Grid in css?

 Answer:

 Key Differences:

Layout Dimensionality:
- Flexbox is 1D: works on one axis at a time (either horizontal or vertical).
- Grid is 2D: works on both axes (rows and columns) simultaneously.

Complexity:
- Flexbox is simpler and more intuitive for linear (row or column) layouts.
- Grid is more powerful for complex layouts involving both rows and columns.

Use Case:
- Flexbox is ideal for simpler layouts like navbars, rows of items, or any layout where you align items in a row or column.
- Grid is better suited for complex web designs like dashboards, magazine-style layouts, or page grids that need both row and column controls.

---

How many types of display properties in css?


| **Display Value** | **Description** |
| --- | --- |
| `block` | Block-level element. |
| `inline` | Inline-level element. |
| `inline-block` | Inline element with block properties. |
| `flex` | Flex container for 1D layout. |
| `inline-flex` | Inline flex container. |
| `grid` | Grid container for 2D layout. |
| `inline-grid` | Inline grid container. |
| `table` | Table element behavior. |
| `none` | Hides the element. |
| `contents` | Removes the element box but keeps child elements. |
| `list-item` | List items with markers like bullets or numbers. |

---

what is responsive design and how to achieve without media query?

Answer:
- Fluid Layouts (Percentage-based Widths)
    - Use percentages instead of fixed units (e.g., px) for widths and heights.

- Flexible Box Layout (Flexbox)

    ```
    .flex-container {
        display: flex;
        flex-wrap: wrap; /* Allows items to wrap if they overflow */
        gap: 10px;
    }

    .flex-item {
        flex: 1 1 auto; /* Adjusts size dynamically */
    }
    ```
- CSS Grid
    - Grid layout enables responsive designs without media queries using the auto-fit or auto-fill properties.

- Responsive Typography with Relative Units
    - Use relative units like em, rem, or % for font sizes.

- View Width and View Height Units (vw, vh)
    - Use viewport-based units to make elements responsive.

- Aspect Ratio
    - Maintain proportional dimensions with the aspect-ratio property.

- Container Queries (Modern CSS)
    - Instead of targeting the viewport, container queries adjust styles based on the size of a parent container.
    ```
    @container (min-width: 400px) {
        .box {
            background-color: lightblue;
        }
    }
    ```

- Scalable Images and Videos
    - Use max-width for images and videos to ensure they scale with the container.

    ```
    img, video {
        max-width: 100%;
        height: auto; /* Maintains aspect ratio */
    }
    ```

    ---

    difference between combination selectors
    - div p
    - div > p
    - div + p
    - div ~ p

    Answer:

-  div p (Descendant Selector)
    - Description: Selects all <p> elements that are descendants (direct or indirect children) of a <div>.

- div > p (Child Selector)
    - Description: Selects all <p> elements that are direct children of a <div>
        ```
        <div>
            <p>Selected</p> <!-- Direct child -->
            <span>
                <p>Not selected</p> <!-- Not a direct child -->
            </span>
        </div>

        ```

- div + p (Adjacent Sibling Selector)
    - Description: Selects the immediately following sibling <p> element that comes after a <div>
        ```
        <div></div>
        <p>Selected</p> <!-- Immediate sibling -->
        <p>Not selected</p> <!-- Not immediately following the <div> -->    
        ```

- div ~ p (General Sibling Selector)
    - Description: Selects all <p> elements that are siblings of a <div> and come after it in the DOM.

        ```
        <div></div>
        <p>Selected</p> <!-- Sibling -->
        <p>Selected</p> <!-- Sibling -->
        <span></span>
        <p>Selected</p> <!-- Sibling -->    
        ```

---

Advantages of typescript over JavaScript

 - Static Typing
 - Better Developer Experience
 - Improved Readability and Maintainability
 - Object-Oriented Programming (OOP) Support
 - Easier Refactoring
 - Code Consistency and Structure
 - Better Tooling and Build Support
 - Enhanced Scalability


 ---

 - Did you worked with re-fetch or caching mechanisms in RTK?

