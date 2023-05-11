import { createSlice } from "@reduxjs/toolkit";

interface LoginProps {
  acToken: string;
  dataUser: object;
}

const initialState: LoginProps = {
  acToken: "",
  dataUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.acToken = action.payload;
    },
    setFullDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
    deleteDataUser: (state, action) => {
      state.acToken = action.payload;
    },
  },
});

export const { setDataUser, deleteDataUser, setFullDataUser } =
  userSlice.actions;

export default userSlice.reducer;
