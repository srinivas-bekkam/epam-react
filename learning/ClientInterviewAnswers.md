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