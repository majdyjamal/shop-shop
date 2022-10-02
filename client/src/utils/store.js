// https://react-redux.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducer';

const store = configureStore({
    reducer: globalReducer
});

console.log(store.getState())

export default store;