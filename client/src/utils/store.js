// https://react-redux.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers';

const store = configureStore({
    reducer: globalReducer
});

export default store;