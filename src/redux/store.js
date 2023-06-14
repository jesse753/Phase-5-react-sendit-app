import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    // Add your individual reducers here
  });

 const store = createStore(rootReducer);

  