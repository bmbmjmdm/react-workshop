import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import catReducer from "./catSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cats: catReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
