import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch } from '../../../hooks'
import { updateSearch } from '../../redux/searchSlice'

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchData = event.target.value
    dispatch(updateSearch(searchData))
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AiOutlineSearch
          style={{
            padding: '4px',
          }}
        />
        <TextField
          id="input-with-sx"
          label="Pesquisar"
          variant="standard"
          onChange={handleSearch}
        />
      </Box>
    </Box>
  )
}

export default SearchInput