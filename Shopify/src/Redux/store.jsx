import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Redux/slice'

const store = configureStore(
{
    reducer:{
        cart: cartSlice,
    }
}
)

export default store;