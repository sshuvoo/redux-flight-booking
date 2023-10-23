import { combineReducers } from 'redux';
import flightBookingReducer from './flight_booking/reducer';

const rootReducer = combineReducers({
   flightBook: flightBookingReducer,
});

export default rootReducer;
