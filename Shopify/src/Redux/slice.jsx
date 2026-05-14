import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.playload)
        },
        deleteToCart:(state,action)=>{
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export default cartSlice.reducer;
export const{addToCart,deleteToCart}=cartSlice.actions