import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProps } from '../components/ProductCard'

export type InitialState = ProductProps[]

const initialState: InitialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      return [...state, action.payload]
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter(({ id }) => id != action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer