import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

const drawerSlice = createSlice({
  name: 'isDrawerOpen',
  initialState,
  reducers: {
    openDrawer: () => {
      return true
    },
    closeDrawer: () => {
      return false
    }
  }
})

export const { openDrawer, closeDrawer } = drawerSlice.actions

export default drawerSlice.reducer