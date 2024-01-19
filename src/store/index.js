import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
