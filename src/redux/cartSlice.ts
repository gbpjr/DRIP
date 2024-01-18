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
      const idToRemove = action.payload

      const updatedCart = state.filter(item => item.id !== idToRemove)

      return updatedCart
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer