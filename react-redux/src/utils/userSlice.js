import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'auth',
    initialState:{
        authDetails:{name:"suryabhan singh"}
    },
    reducers:{
        setUserAuthDetailsAction:(state,action)=>{
            state.authDetails.name=action.payload.name;
            state.authDetails.profile=action.payload.image;
            state.authDetails.loginStatus=action.payload.loginStatus;
        },
        updateLoginStatusAction:(state,action)=>{
            state.authDetails.loginStatus=action.payload.loginStatus
        },
       logoutUserAction:(state)=>{state.authDetails.loginStatus=false}
    }
});

export const {setUserAuthDetailsAction,updateLoginStatusAction,logoutUserAction}=userSlice.actions;
export default userSlice.reducer;