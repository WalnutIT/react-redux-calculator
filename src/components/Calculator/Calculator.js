/**
 * Container component for the calculator.
 * Connects the UI logic to the Redux Store and handles the business logic.
 * @module Calculator
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalculatorUI from './CalculatorUI';
import { startCalculation, calculationSuccess, calculationError } from '../redux/actions/calculatorActions';

/**
 * Calculator component serving as a container for calculator logic.
 * Utilizes Redux to manage states and dispatch actions.
 * 
 * @returns {React.Component} The Calculator component with bound UI and logic.
 */
function Calculator() {
    const dispatch = useDispatch();
    const variable = useSelector(state => state.calculator);
    
    console.log(variable ?? 'empty');
    /**
     * Handles the calculation logic.
     * Dispatches corresponding Redux actions based on the operation.
     * 
     * @param {number} num1 - The first number for the calculation.
     * @param {number} num2 - The second number for the calculation.
     * @param {string} operation - The mathematical operation to be performed.
     */
    const handleCalculation = (num1, num2, operation) => {
        dispatch(startCalculation());
        try {
            let result;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if(num2 === 0) throw new Error('Division by zero');
                    result = num1 / num2;
                    break;
                default:
                    throw new Error('Unknown operation');}
            dispatch(calculationSuccess(result));
        } catch (err) {
            dispatch(calculationError(err.message));
        }
    };

    return (
        <CalculatorUI 
            onCalculate={handleCalculation} 
            status={variable === undefined ? "Initializing":variable.status}
            result={variable === undefined ? "0":variable.result}
            error={variable === undefined ? "":variable.error}
        />
    );
}

export default Calculator;
