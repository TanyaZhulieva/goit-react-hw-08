import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/auth/slice'
import contactsReducer from "../redux/contacts/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
