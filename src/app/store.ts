import {configureStore} from '@reduxjs/toolkit';
import habistReducer from "../app/habitSlice";

const store = configureStore({
  reducer: {
    habits:habistReducer,
  },
});

export type RootStates = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;