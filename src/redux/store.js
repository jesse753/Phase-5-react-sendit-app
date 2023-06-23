import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';
import reducer1 from './reducers/reducer1';
import reducer2 from './reducers/reducer2';

// Define your reducers
//const initialState1 = {
  // Initial state for reducer1
//};

//const initialState2 = {
  // Initial state for reducer2
//};

//const reducer1 = (state = initialState1, action) => {
  // reducer1 logic
//};

//const reducer2 = (state = initialState2, action) => {
  // reducer2 logic
//};

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  reducer1,
  reducer2,
});

// Create the Redux store
const store = createStore(rootReducer);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store;





  