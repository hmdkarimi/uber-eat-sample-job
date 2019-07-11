import  './actions';
export const initialState = {
    home: [],
};


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'FETCH_HOME': {
      
      if (action.data) {
        
        return {
          ...state,
          home:action.data,
            
        };
      }
      break;
    }

    default:
      return initialState;
  }
}
