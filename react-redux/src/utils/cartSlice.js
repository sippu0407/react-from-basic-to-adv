import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["a",10,20]
    },
    reducers:{
        addAction:(state,action)=>{state.items.push(action.payload)},
        removeAction:(state)=>{state.items.pop()},
        emptyCartAction:(state)=>{state.items.length=0}
    }
});

export const {addAction,removeAction,emptyCartAction}=cartSlice.actions;
export default cartSlice.reducer;