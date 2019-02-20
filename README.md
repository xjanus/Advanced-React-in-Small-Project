# React App Functionality

* The App shows there box models with information about three persons - their name and age. You can dynamically change the names in real time using the input box. It also additionally asks to Log in.

* There are 2 buttons which are styled to vary in color upon certain tasks.

* The "Toggle Persons" button will show or hide the 3 Person boxes and change its color accordingly.

* Log In button will simply replace "Please Log In" with "Authenticated" 

* Clicking on or near any name will delete the information about that person and change the color of button "Toggle Persons"

* The "Remove Cockpit" button at the top of the page will remove all the headings.

# Primary React Concept Used / Studied:

### Higher Order Components 
  - with and without WrappedComponent parameter - [https://reactjs.org/docs/higher-order-components.html]

### CSS Modules Stylesheet
  - [https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet]: CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.

### React.createContext, Context.Provider and Class.contextType
  - [https://reactjs.org/docs/context.html#reactcreatecontext]

### React.PureComponent and React.memo
  - [https://reactjs.org/docs/react-api.html#reactmemo]

### Typechecking with PropTypes
  - [https://reactjs.org/docs/typechecking-with-proptypes.html]

### Hooks - useRef, useEffect
  - [https://reactjs.org/docs/hooks-reference.html#useeffect]

### Class based Component/Stateful Components & Functional Components/Stateless Components
  - [https://reactjs.org/docs/react-component.html]

### The Component Lifecycle Methods Used/Studied

**Mounting**
 - constructor()
 - static getDerivedStateFromProps()
 - render()
 - componentDidMount()

**Updating**
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

**Unmounting**
  - componentWillUnmount()
  
## Getting Started and Execution

* Clone this repo
* Run npm install
* Run npm start

## Authors

* **xjanus** (https://github.com/xjanus)

## Acknowledgments

* Maximilian Schwarzmüller's course: React: The Complete Guide [https://www.udemy.com/react-the-complete-guide-incl-redux/]

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
