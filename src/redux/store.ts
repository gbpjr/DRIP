import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './searchSlice'
import cartReducer from './cartSlice'
import drawerReducer from './drawerSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    isDrawerOpen: drawerReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch