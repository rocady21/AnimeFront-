import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'userSlice',
  initialState:{
    status:"not-authenticated",
    user: {},
    messageError: ""
  },
  reducers: {
    onChecking: (state)=> {
        state.status="checking";
        state.user = {};
        state.errorMessage = undefined
    },
    onLogin:(state,{payload}) => {
        state.status = "authenticated",
        state.user = payload;
        state.errorMessage = undefined
    },
    onLogout:(state,{payload}) => {
        state.status="not-authenticated";
        state.user = {}
        state.errorMessage = payload
    },
    CLearMessageError: (state) => {
      state.errorMessage= undefined
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChecking,onLogin,onLogout,CLearMessageError } = userSlice.actions

