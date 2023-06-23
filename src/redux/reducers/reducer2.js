const initialState = {
    // Define your initial state properties here
  };
  
  const reducer2 = (state = initialState, action) => {
    switch (action.type) {
      // Define different cases for different action types
      case 'ANOTHER_ACTION_TYPE':
        // Return the updated state based on the action
        return {
          ...state,
          // Update specific state properties based on the action
        };
      default:
        return state;
    }
  };
  
  export default reducer2;
  