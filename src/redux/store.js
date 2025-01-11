import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../redux/slices/testSlice";

const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

export default store;
