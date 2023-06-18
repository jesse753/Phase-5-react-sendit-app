import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Import your individual reducers
import reducer1 from './reducers/reducer1';
import reducer2 from './reducers/reducer2';

// Combine your reducers
const rootReducer = combineReducers({
  reducer1,
  reducer2,
});

const store = createStore(rootReducer);

export default store;



  