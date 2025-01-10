
Interviewee : Swamy Kurakula & Krishna Yaramati 
Interviewer : Gaurav Rawlyani 
Date: 21/06/23 15:50

- Swamy Kurakula Krishna Yaramati for ur ref
- Hooks
- What are hooks? Pros & cons
- useEffect 
- explain how we achieve different lifecycles
- Behaviour with different dependancy array - null, [], [value]
- Use memo vs usecallback
- useRef vs forwardRef
- useContext with example
- useReducer
- HOC & custom hook example
- Redux
- What is redux? Pros & cons
- Explain a general flow
- Handle async actions
- Code example with 2Parents using 1child
- MicroFrontEnd
- What are MFE? Pros & cons
- Communication between mfe.
- Sharing common component btw mfg
- Design question
- Unit Testing - mock/stub/spy
- General
- Project architecture
- Performance improvements 
- Security/auth/authorization
- SOLID
- Typescript
---


Interviewee : Nagaraju Merugu
Date : 27/06/23 12:34

Asked questions about the projects and experience (gone through my CV)
- HTML:
    -    What are semantic tags? write down sample HTML for a blog page with sidebar and list of blogs
    -    difference between <p>, <span> and <label> tags when to use which tag.
    -    what are block, inline elements what are the differences
    -    meta tag to achieve responsiveness with syntax

- CSS:
    - Positions and movement of an element with each position (relative, absolute, fixed and sticky)
    - various display properties and what is the differences between them
    - media queries for specific screens
    - grid and flexbox

- JS:
    - Recursion and use cases with example 
    - Hoisting
    - difference between declaring variables with let and var
    - call, apply and bind methods
    - webComponents (agnostic)
- React:
    - class and functional components
    - Hooks you know and explain each of them
    - Custom Hook
    - what is props drilling, how to overcome the issue (context with example)
    - If a parent component have two children, how to re-render only 1 children
    - What are real dom and shadow dom
    - How the DOM will get updated
    - how to manage state globally without using redux (useContext and useReducer)
- Redux:
    - What is Redux
    - how the store updates the values
    - redux hooks 
    - redux middle ware's you have worked on

Interviewee: Nagaraju Merugu (Unverified)
Date: 29/06/23 12:16

1) MicroFrontend using module federation, How the shell will render the MFE
2) past experience with Microfrontend and how you used to pass data between MFE's
3) questions on designing and how you divide a website into different components and why
4) if you want develop your epam.com website using MFE how many MFE will you create and why?
5) how to optimize the loading time of an MFE
6) useContext
7) Redux and middleware's you worked on and the differences. which one you choose to work with the most and why?
8) as redux is third party library with will take time to load compared to context(as it is built in). why you choose redux why not context
9) testing frameworks (asked about RTL)
10) typescript

---

Interviewee : Konda Rahul
Date: 04/07/23
 
- HTML & CSS
    - different position values and their behaviour
    - what is sass and how good you are in it
 
- JS
    - what are closures
 
- React
    - Ways to improve performance
    - different stages of react app
    - do we have alternate for jsx
    - props vs state
    - arrays vs lists in react
    - how can we decide right key to pass to list item
    - what are different ways of state management?
    - which one you choose flux vs redux and why?
 
- Others
    - did u use oath
    - what is difference between access token and id token
    - code review steps you do
    - You have an app with so many fields in the form. How do you show to user? How do you prevent repeated clicks of button?






Interview - CI - Round-2
Client - SNP
Interviewers - Venkat Chintalapati

1) Anugular vs React
2) What are props in reacts?
3) what are higher order components?
4) Do you know design patterns and what is your favorite design pattern and why is it your favorite?
5) do you know Micro front-ends
6) Any idea about Agile methodology?follow up about SAFe Framework.
7) which ci/cd work flow you follow?
8) How do you maintain the quality of the code?
___

Interview - CI - Round-1
Client - SNP
Interviewers - mahesh komuravelli, subramanyam cheekati
 
1) Questions on previous projectss
2) Angular vs React
3) what is state and effects of state change on the UI?
4) Optimizing methods for a large list of child components?
5) How to pass state form child component to other components in the component tree?
6) how to make Responsive UI?
7) nodejs vs reactjs
8) key components in redux.
9) crossbrower css issues
10) Any idea about Agile methodology
11) Do you Accessibility ?
12) Authentication and authorization process.
13) describe your approach and List the components for user resgistration from?
14) React.memo and useCallback
15) Lifecycle methods 
16) how to catch runtime errors in react
___

Syam:
 
- Recent project explanation
- Authentication and Authorization mechanism
- Where you stored the token and why
- Why we need .env files
- some plugins in Webpack
- custom hooks and examples
- Why you have used the Redux
- useCallback, useMemo differences
- Write the example for useCallback
 
Amit:
- Explain the project
- Which testing libraries are used
- How to integrate Java backend with Frontend
- Pros and cons of Redux
- Are you comfortable with Angular
 ___



interview for Harendra Sharma

 Round 1 ( S & P Global ) , Interviewer - Vishal Gaje
 
Introduction
- Can you introduce yourself and share your professional background? What inspired you to pursue a career in software development?
- Could you describe some of your previous projects? What technologies did you utilise, and what challenges did you encounter?

### Technical Questions
- How does the this keyword behave in different contexts in JavaScript, especially in regular functions compared to arrow functions?
- What are the key differences between arrow functions and traditional function expressions in JavaScript regarding syntax and behavior?
- Can you explain prototype inheritance in JavaScript? Please provide an example that demonstrates how inheritance is implemented using prototypes.
- How do async functions work in conjunction with promises in JavaScript? Can you provide an example to illustrate their interaction?
- What best practices should be followed when integrating and utilizing third-party components, such as AG Grid, in a React application? What key considerations should be taken into account?
- What are the main differences between Redux and Redux Toolkit? What advantages does Redux Toolkit provide over traditional Redux?


Output-Based Questions
 
1.Given the following code snippet, can you explain how it demonstrates prototype inheritance?


JavaScript
```
    function Animal() {}
    Animal.prototype.speak = function() {
    console.log('sound!');
    };
    function Dog() {}
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.speak = function() {
    console.log('bark!');
    };
    var pet = new Dog();
    pet.speak();
```
 
2. Analyse the following code. What will be logged to the console, and why?
JavaScript
```
    function Person() {
    this.age = 25;
    setTimeout(function growUp() {
        this.age++;
        console.log(this.age);
    }, 1000);
    }

    var p = new Person();
 ```
 
3. Review the following async function. What will be the output, and in what order will it appear in the console?
 
JavaScript
```
    async function asyncFunction() {
        console.log('1');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('2');
    }
    console.log('3');
    asyncFunction();
    console.log('4');
```


interview questions for 2nd round SNP client(gangi reddy)
1) coding question on react-router
2) what are the options that we can write in the Route tag
3) how to pass the logged in info to the components present in the routes
4) explain the below code 
   <AuthContext.Provider value={props.authObj}>
   <UserContext.Provider value={props.userObj}>
      <NotificationProvider type={NotificationStyle.TOAST} delay={5000}>
         <Suspense fallback={
         <LoadingBar />
         }>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/job">
               <Layout>
                  <Routes />
               </Layout>
            </BrowserRouter>
         </QueryClientProvider>
         </Suspense>
      </NotificationProvider>
   </UserContext.Provider>
</AuthContext.Provider>


5) how reacts works explain
6) explain reduction in react
7) what are the different ways to rerender a component
8) is it possible to modify the props that are passed to children from children component
9) how to change the data present in parent from children
10) what is the use of tsconfig.json file what do we write in it
11) we have 10 api calls and if we want to intercept that request and add headers how can we do it ?(axios instance and interceptors)
12) what is the main difference between fetch and axios when we use each of them?
13) any experience in java?
 
questions from Amit
1) explain about project
2) any backend experience
3) what is ur primary skill
4) any database experience can you write sample queries
5) what kind of store you have used in your project and why did you use it?
6) are you ok to work on angular if given chance? how easily you can transition?
7) Do you know microfrontends?


Here are the questions asked in s&p Lead  round 2:
 
Interviewer: Shyam Lanka
 
- Tell me about your self 
- Explain about your previous project and followup questions 
- How did you handle authentication and authorization in your project and follow up questions? 
- Why did you choose to store token in session storage 
- Different ways of component communication 
- Did you integrated statemanagement library in your project and why do you feel it is required? 
- How do you solve the issue, if two npm packages having common dependency with different version? 
- What are overrides, what they do? 
- Different plugins used in webpack? 
- What module federation and why do you use that? 
- Explain about mircro frontends 
- How did you handle different environment specific configurations in your project? 
- What is cors issue how do you handle it? 
- How do you handle security vulnarabilities? 
- How do you handle xss attacks? 
- Explain about context in react? 
- What are usecallback and usememo 
- Tell me the scenarios where did you use usecallback and usememo? 
- Write the code using usecallback and usememo and explain while writing? 
- What is useref is used for and write the code for that? 
- Event bus communication 
- What if the data published from one component before loading of another component which is subscribed for it 
- Did you write testcases, Which testing library used 
- How much test coverage you maintain in your project 
- How do you handle if your application depends on thirdparty api server 
- What is the idle  approach to make an api call for that service and pros and cons of that approach 
- Explain about ci/cd flow 
- Any backend experience and how comfortable you are with db? 


Client: S&P  Interviewer's: Venkat Vempati, SathishKumar Suriyakumar, Uma Sharma & Venkat Chintalapati
- Angular vs react 
- State vs props
- State vs context vs redux
- Communication between components and how many ways?
- Redux advantages and disadvantages?
- How to handle session timeout in frontend
- Use of session storage and local storage
- Ag grid - dynamic rendering & real time scenarios
- When to use state when to use redux
- Hooks in React
- How we can use different urls based on environment 
- React routes based questions
- Display options in dropdowns
- ES6 vs Typescript
- Is it possible to use nested components? 
- How many ways we can add css to the components?
- Unit testing related questions
- Axios & Handle API errors - interceptors
- How many ways to resolve merge conflicts in GIT
- Creating feature branches and creating PR
- Deployments related question
- Do you havs experience in devops azure
- Do you have experience in writing REST apis
- what are the different state management techniques you have used so far?
- micro front ends
  -- communication between them
  -- advantages & disadvantages
- How do you achieve 100% code coverage
- what are the tools you have used so far to monitor the production logs
- Do you have any experience in real time user metrics.
- How to integrate Power-BI in web application.
- Any experience handling web application deployment end to end?


Interview Questions for S&P Global 
Interviewer Name: Solleti, Lokesh kumar
 
- HTML, CSS:
- semantic elements in html
- how do you display div elements side by side
- how to achieve responsive design, follow-up question on media-queries (and write the syntax)
- box model
- block vs inline
- CSS Pre-processors and its advantages ?
- what is css specificity
- what is difference between borderbox vs contentbox
- How to achieve css browser compatibility
- Flexbox vs Grid in css
- what is boxsizing
- what is Z-Index
- How many ways to position an element in css
- How to align text to left inside div
- how many types of display properties in css
- what is responsive design and how to achieve without media query
- difference between combination selectors
- div p
- div > p
- div + p
- div ~ p
- what is float in css and float works
- how to add background image around the text
- what is transform in css
 
React:
- difference between class components vs Functional components
- what is custom hook and why we need it
- Explain all the different hooks
- useEffect without dependency and with empty dependency array
- why useCallback hook is needed?
- How to create a customHook?
- Explain how React Routing works?
- React testing library
- what is the use of useContext
 
Typescript:
- How typescript code is getting converted ?
- Advantages over JavaScript
 
- Redux, Redux toolkit:
- what is React-Redux
- Main difference you observed with RTK and Redux?
- what is tag in react toolkit query how it is useful while refetching
- Did you worked with re-fetch or caching mechanisms in RTK?
 
Miscellaneous:
- How and where to maintain different urls for different environments like (dev, qa, uat, production)
- Follow-up question: How does your code work according to those different urls in different environments?
 
 



PF round questions

- Propdrilling
- Protypical inheritacne
- Closures
- ContextAPI vs Redux
- What are props in reacts?
- What are higher order components?
- Diffing 
- Angular vs ReactJS - which is better ?
- React RTK Query 
- Generator Functions and usecase scenario
- Redux Tool Kit - Thunk 


- let, var, const keywords
- promise
- valid parentheses coding problem
- interface vs type
- generics implementation
- Pure component
- Lifecycle methods
- state management in React
- Redux, Redux thunk
- Security Vulnerabilities
- Performance optimization
- media queries
- preprocessor in css

1. null vs undefined
2. hoisting
3. Map polyfill
4. IIFE syntax
5. Event delegation, event propagation and event.persist
6. steps involved in rendering a component to screen
7. Diffing algorithm
8. error catching in react
9. Pure components
10. HOC and Render prop patterns
11. about context API
12. use of redux middlewares and Thunk vs Saga
13. different types of hooks used previously
14. performance optimizations in react
15. how MFEs communicate with each other

1) Explain useCallback & useMemo
2) Redux Middleware
3) Axios Interceptors 
4) Security Vulnerabilities
5) type vs interface.
6) Unknown vs Any
7) module federation

async function asyncFunction() {
    console.log('1');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('2');
}
 
-   console.log('3');
    asyncFunction();
    console.log('4');
 
- Authentication and Authorization mechanism : Done 
- Where you stored the token and why Done
- Why we need .env files -- Done, incomplete answer... endpoints not said 
- some plugins in Webpack : Done
- custom hooks and examples:  Done 
- Why you have used the Redux, Pros and cons of Redux : Done 
- useCallback, useMemo differences with pseudo code : Done
- package-lock.json --> could be better
- Jest Vs RTL --> Learn the differences 
- Quality Checks in Previous Project : improve on ESLint , - SonarQube, Prettier.
- React Design Patterns: Done
- useContext Hook: Done 

