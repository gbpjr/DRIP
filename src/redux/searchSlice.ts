import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialState = string

const initialState: string = ''

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (_state, action: PayloadAction<InitialState>) => {
      return action.payload
    },
  }
})

export const { updateSearch } = searchSlice.actions

export default searchSlice.reducer