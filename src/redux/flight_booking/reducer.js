import { BOOK, DELETE } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case BOOK: {
         const cloneState = [...state];
         const newFlight = {
            ...action.payload,
            id: state.length <= 0 ? 1 : state[state.length - 1].id + 1,
         };
         cloneState.push(newFlight);
         return cloneState;
      }
      case DELETE: {
         return [...state].filter((flight) => flight.id !== action.payload.id);
      }
      default:
         return [...state];
   }
};

export default reducer;
