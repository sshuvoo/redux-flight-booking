import { BOOK, DELETE } from './actionTypes';

export const flightbook = (data) => {
   return {
      type: BOOK,
      payload: data,
   };
};

export const flightDelete = (id) => {
   return {
      type: DELETE,
      payload: { id },
   };
};
