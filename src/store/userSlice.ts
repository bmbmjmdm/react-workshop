import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  error: string;
  username: string;
  theme: "blue" | "default";
}

const initialState: UserState = {
  error: "",
  username: "",
  theme: "default",
};

// The slice contains all of our state information, reducers, actions, etc for the user
export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      if (action.payload.username && action.payload.password) {
        state.username = action.payload.username;
        if (action.payload.blue) {
          state.theme = "blue";
        } 
      } else {
        state.error = "Invalid username or password";
      }
    },
  },
});

// We export the actions generated by our slice based on our reducers
export const { login } = userSlice.actions;

// Selectors let us select values from the state
export const selectUsername = (state: RootState) => state.user.username;
export const selectError = (state: RootState) => state.user.error;
export const selectTheme = (state: RootState) => state.user.theme;

export default userSlice.reducer;
