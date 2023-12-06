/**
 * Configuration and creation of the Redux store.
 * The store is the central repository for the entire application state.
 * @module store
 */


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export default configureStore({
  reducer: rootReducer,
});

