import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
