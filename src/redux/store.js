import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BOOK } from './flight_booking/actionTypes';

const flightLimitChecker = (store) => (next) => (action) => {
   if (action.type === BOOK && store.getState().flightBook?.length >= 3) {
      return;
   } else next(action);
};

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(flightLimitChecker))
);

export default store;
