/**
 * Main component of the calculator application.
 * Serves as the root component that incorporates all other components of the application.
 * @module App
 */

import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

/**
 * The main component that encompasses the calculator and other parts of the application.
 * 
 * @returns {React.Component} The App component.
 */
function App() {
  return (
    <div className="App" id="root">
      <Calculator />
    </div>
  );
}

export default App;

