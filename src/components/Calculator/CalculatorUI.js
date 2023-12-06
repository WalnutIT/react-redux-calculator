/**
 * Presentation component for the calculator.
 * Displays the user interface for inputting numbers and operations and presents the result.
 * @module CalculatorUI
 */

import React from 'react';

/**
 * Presentation component for the calculator.
 * This component is responsible for rendering the user interface.
 *
 * @param {Object} props - Properties passed to the component.
 * @param {function} props.onCalculate - Function called when a calculation is triggered.
 * @param {string} props.status - The current status of the calculation (e.g., 'Loading', 'Loaded').
 * @param {number} props.result - The result of the calculation.
 * @param {string} props.error - Error message if an error occurred.
 * @returns {React.Component} The UI component of the calculator.
 */
const CalculatorUI = ({ onCalculate, status, result, error }) => {


    return (
        <div>
            {/* UI elements for input, buttons, and result display */}
            <div>Status: {status}</div>
            <div>Result: {result}</div>
            {error && <div>Error: {error}</div>}
            <div>In order to calculate "1 + 1" click on "Click Me" </div>
            {/* Additional UI elements such as input fields and buttons */}
            <button type="button" onClick={() => onCalculate(1,1, "+")}>Click Me</button>
        </div>
    );
};

export default CalculatorUI;
