import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counterValue: 0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state,action)=>{
            state.counterValue++;
        },
        decrement: (state,action)=>{
            state.counterValue--;
        },
    },
});

export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions;
export const selectCounter = (store)=>store.counter.counterValue;