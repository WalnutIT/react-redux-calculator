/**
 * Main reducer file.
 * Combines all reducers of the application into a single root reducer.
 * @module rootReducer
 */

import { combineReducers } from 'redux';
import { calculatorReducer } from './calculatorReducer';

/**
 * Combines various reducers of the application into a root reducer.
 * Currently, it includes only the calculatorReducer but can be expanded
 * to include additional reducers as the application grows.
 */
export default combineReducers({
    calculator: calculatorReducer
    // Additional reducers can be added here.
});
