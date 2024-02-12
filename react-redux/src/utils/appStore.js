import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cartSlice';
import userSliceReducer from "./userSlice";
const appStore=configureStore({
    reducer:{
        cart:cartSliceReducer,
        userAuth:userSliceReducer
    }
    
});

export default appStore;
