<!-- 1st Session -->
1. What is Emmet?

		 Emmet is a plugin for text editors, used to improve the speed of coding in HTML. There are lot of shortcuts to get the suggestions while we are writing the code. Example: By typing ! you will see suggestion of index template.



2. Difference between a Library and Framework? 

		The main difference is Inversion of control

			Library: We can simply say library consists of set of functions and that being used repeatedly which are written by us, those functions are controlled by us.

			Framework: Where as framework consists of lot of libraries, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

3. What is CDN? Why do we use it? 

		CDN is a Content Delivery Network, The network servers that distributes the content from an origin server throughout the world by edge POPs nodes mechanism, when ever the user visits the website then immediately scripts are downloaded and cached in browser, if same user visits another website that is being used same CDN files then it won't make any new request, it directly uses the cached data. The main reason to use CDN is user experience by rendering the web pages fastly and caching the data.

		

4. Why is React known as React?

		 Name itself react will gets reacted when there is a change in data, in simple terms when the data in react components changes then react will automatically re-render the component to make it look up-to-date.

		

5. What is cross-origin in script tag? 

		When we make a request from one origin (Requestor) to another origin (Sender) then network will blocks the request, to make it work we need to enable cross-origin then only resource is fetched to the origin(requestor).



6. What is difference between React and ReactDOM?   

		React is a meant responsible to creating views where as ReactDOM will helps to render the UI and manipulate the DOM.

		

7. What is difference between react.development.js and react.development.js files via CDN? 

		react.development.js CDN are development dependencies which are not being used in PRODUCTION react.development.js CDN is minified version of development CDN which are suitable for production use.

		

8. What is async and defer?

		 async - Name itself async will downloads the scripts asynchronously or parallel along with HTML parsing, when scripts are available, parsing gets paused and scripts are executed then HTML parsing resumes.
		defer - Here also scripts are downloaded parallelly but execution starts only after completion of HTML parsing.





<!-- 2nd Session -->

All we need to know about package.json
Package Version- 1.2.3
1.2.3 - Major.Minor.Patch
~1.2.3 - tilde is used to accept all the patch updates, and freezes the major and minor version
^1.2.3 - caret will use to update both minor and patch updates 

package.lock.json
- It locks the exact version for production, never put this file in package.json
- It maintains the integrity by using hash 

Parcel
- Bundling
- Hot Module Replacement
- File watcher algorithm i.e written in C++
- Minification
- Caching
- Browser support
- Image Optimization
- Cleans our code
- Dev and Production build
- Assigning PORTS
- Zero Config Bundler - It doesn't need any configuration just install it and use
- Consistent Hashing Algorithm for Caching and Bundling 
- Tree Shaking - Removing Unwanted code from our project

Transitive Dependencies 
- Packages that uses dependencies and that dependencies will also uses some other dependencies

Babel
- Babel is used for transformation of code
		- It uses two preset 
			- 1. preset-env - to transform ES6+ into traditional JS
			- 2. preset-react  - to transform JSX
- Above two presets are need to configure as .babelrc in root   




<!-- 3rd Session -->


Reconciliation -  The reconciliation process makes react faster, in this process react updates the Browser DOM.
	- This makes use of two concepts 
		- 1. Virtual DOM - Keeps the copy of Browser DOM when it is rendering on Browser
		- Diffing Algorithm   - It compares the newly updated DOM tree with Virtual DOM, then it updates the Browser DOM with least number of changes without rendering the entire DOM, this can be done the in memory 

JSX - JSX is a HTML like syntax but it is not HTML inside Javascript, created by Facebook Devs.
	Babel convert this JSX code into React.create Element
	- 

	 Advantages - 
		- Readability
		- Developer Experience
		- Syntactical Sugar
		- Maintainability

React Components 
	- Class Based Components - Old wat of writing code
	- Functional Components - New way of writing code

	Functional Components:
		- Functional component is a normal function
		- Return some piece of JSX code 
		- 

	Sanitization: React will takes care of XML attacks, it will do sanitize all the elements before rending 
	
	Component Composition: Composing Components
		Creating new component with other component is called Component Composition. The process of using other components would be passing components as props to other components



<!-- 4th Session -->

- JSX can only have one parent
- React.Fragment gives us a beautiful feature to wrap all the elements inside this.

Virtual DOM
	- Representation of a DOM is known as Virtual DOM
	- Reconciliation  - it is a process, which uses an diff algorithm, finds the diff between old DOM tree and updated DOM tree
	- To identify the newly or updated nodes react needs key with unique value

React Fiber
- It came in React 16
- New Reconciliation Engine


<!-- 5th Session -->



Named Imports & Exports
	Named Imports
- 
- 

Default Imports & Exports
- 
- 

State - Every component in react mains a state. you can put all the variables in state. every time you have create a variable you use state. 

Hook - Hook is nothing but a normal function, these hooks are provided by React.
- useState - used to create local state variable
		   - this hook will gives you local state variable inside the functional component, don't use useState 
	
- Why do we need state variable?
	- To make sync UI with state, react will keeps track on state variables
	- Whenever my state variable value changes component gets re-rendered  
	- Why react is fast - Faster DOM manipulation
		- Becz it had diff algo, virtual dom

	

<!-- 6th Session -->

useEffect
- It takes callback function, which called when useEffect gets called after rendering the page, useEffect is called in the following cases
		- when state changes
		- when props changes
		- when page rendered
	- If you do not want to call useEffect one each component call, pass dependency as Empty Array
	- If you want call useEffect on certain conditions then that dependency variables should be in dependency array



<!-- 7th Session -->

Routing:
- Using react-router-dom package help us to create routing.
- Import CreateBrowserRouter function from the package to create route configuration.
- import RouterProvider takes router configuration and render.
- import useRouteError hook, it will gives error object if there is any invalid routes redirected by user. 
- Two types of routing;
	1. Client Side Routing - By importing Link component from above package to active SSPa
	2. Server Side Routing - Server side rendering
- Outlet - all the childrens will go into the Outlet
- useParams - will gives the route paramters as object 
