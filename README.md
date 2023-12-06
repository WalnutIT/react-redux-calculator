# Project structure

calculator-app/
│
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   └── ...
│
├── src/                     # Source code
│   ├── components/          # Reusable components
│   │   └── Calculator/      # Calculator component
│   │       ├── Calculator.js       # Container component for the calculator
│   │       ├── Calculator.test.js  # Unit tests for the Calculator component
│   │       ├── CalculatorUI.js     # Presentation component for the calculator
│   │       ├── CalculatorUI.test.js # Unit tests for the CalculatorUI component
│   │       └── Calculator.css      # Styles for the calculator
│   │
│   ├── redux/               # Redux-specific files
│   │   ├── actions/         # Redux Actions
│   │   │   ├── calculatorActions.js
│   │   │   └── calculatorActions.test.js # Unit tests for Redux Actions
│   │   ├── reducers/        # Redux Reducers
│   │   │   ├── calculatorReducer.js
│   │   │   ├── calculatorReducer.test.js # Unit tests for the Redux Reducer
│   │   │   └── index.js
│   │   └── store.js         # Creates and exports the Redux Store
│   │
│   ├── App.js               # Main App component
│   ├── App.test.js          # Unit tests for the App component
│   ├── App.css              # Styles for the App
│   └── index.js             # Entry point for React
│
└── package.json             # Project and dependency management

# Components
## Calculator.js
- A container component responsible for handling business logic and dispatching Redux actions.
- Connects the CalculatorUI component to the Redux store.
- Receives user input and performs calculations.
## CalculatorUI.js
- A pure presentation component responsible for displaying the calculator's user interface.
- Receives all required data and callbacks as props.
# Redux Structure
## Actions
- Defines actions that can be performed in the context of the calculator, such as initializing and performing calculations.
## Reducer
- Manages the state of the calculator, responds to actions, and updates the store accordingly.
## Store
- The central place where the entire application state is held.
# Styles
- CSS files are integrated into the respective components to ensure coherent and modular styles.
# Installation and Execution
- Node.js and npm must be installed.
- The project can be installed and started with npm install and npm start.







--------- other stuff should be read later ----------------------------



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
