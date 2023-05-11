import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";

import counterSliceReducer from "features/counter/counterSlice";
import userSliceReducer from "features/user/userSlice";

const combinedReducer = combineReducers({
  counterSlice: counterSliceReducer,
  userSlice: userSliceReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "logOut") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};
export default rootReducer;
