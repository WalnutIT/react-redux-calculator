/**
 * Reducer for the calculator.
 * Manages states such as initialization, loading, calculation result, and errors.
 * @module calculatorReducer
 */

/**
 * Initial state of the calculator.
 */
const initialState = {
    status: 'Initializing', 
    result: null,
    error: null
};

/**
 * Processes actions and updates the state of the calculator.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {Object} action - The action to be executed.
 * @returns {Object} The new state of the calculator.
 */
export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALISE':
            return { ...state, status: 'Initialized' };
        case 'LOAD_CALCULATION':
            return { ...state, status: 'Loading' };
        case 'CALCULATION_SUCCESS':   
            var stateSuccess = { ...state, status: 'Loaded', result: action.payload };   
            return stateSuccess;
        case 'CALCULATION_ERROR':
            return { ...state, status: 'Error', error: action.payload };
        default:
            console.log(state.status);
            return state;
    }
};
