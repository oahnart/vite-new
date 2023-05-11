import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

/**Login Props type */
interface LoginProps {
  userName: string;
  password: string;
}

interface MyPageData {
  referral: any;
  transaction: any;
  history: any;
}

function resetMyPageData(state: MyPageData) {
  state.referral = null;
  state.transaction = [];
  state.history = [];
}

export interface CounterState {
  value: number;
  referral: string;
  transaction: string;
  history: string;
}

const initialState: CounterState = {
  value: 0,
  referral: "",
  transaction: "",
  history: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setMyPageData(state, { payload }: PayloadAction<MyPageData>) {
      const { referral, transaction, history } = payload;
      state.referral = referral || state.referral;
      state.transaction = transaction || state.transaction;
      state.history = history || state.history;
    },
    resetMyPage: resetMyPageData,
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setMyPageData,
  resetMyPage,
} = counterSlice.actions;

export default counterSlice.reducer;
