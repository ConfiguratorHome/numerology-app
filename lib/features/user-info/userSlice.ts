import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface IUserState {
  name: string | undefined;
}

// Define the initial state using that type
const initialState: IUserState = {
  name: undefined,
};

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserName: (state, action) => {
      console.log("state ", state);
      console.log("action ", action);
      state.name = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
