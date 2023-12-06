/**
 * Action creators for the calculator.
 * @module calculatorActions
 */

/**
 * Action for initializing the calculation.
 * @returns {Object} Action object for initialization
 */
export const initialiseCalculation = () => ({ type: 'INITIALISE' });

/**
 * Action for starting the calculation.
 * This action is called before the calculation begins.
 * @returns {Object} Action object for starting the calculation
 */
export const startCalculation = () => ({ type: 'LOAD_CALCULATION' });

/**
 * Action for successful calculation.
 * This action is called when a calculation is successfully completed.
 * @param {number} result - The result of the calculation
 * @returns {Object} Action object with the calculation result
 */
export const calculationSuccess = result => ({ type: 'CALCULATION_SUCCESS', payload: result });

/**
 * Action for errors during the calculation.
 * This action is called when an error occurs during the calculation.
 * @param {string} error - Error message
 * @returns {Object} Action object with the error message
 */
export const calculationError = error => ({ type: 'CALCULATION_ERROR', payload: error });
