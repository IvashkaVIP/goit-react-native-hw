import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    nickname: null,    
    email: null, 
    stateChange: null,   
    isLoading: true
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
      email: payload.email,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload.isLoading,
    }),
    authSignOut: () => initialState,
  },
});

export const { setIsLoading } = authSlice.actions;