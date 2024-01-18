import React from 'react'

// import {
//   NavLink
// } from "react-router-dom"

import { 
  AppBar as MUIAppBar, 
  IconButton,
  Box,
  Toolbar,
  Typography,
} from '@mui/material'

import SearchInput from '../SearchInput'

import CartIconWithBadge from '../CartIconWithBadge'

import { openDrawer } from '../../redux/drawerSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks'

const Navbar: React.FC = () => {

  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)


  const handleOpenDrawer = () => {
    dispatch(openDrawer())
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <MUIAppBar
        position="static"
        elevation={0}
        color='secondary'
      >
        <Toolbar>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 700,
            }}
          >
            Drip Store
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 0, 
              display: { xs: 'flex', md: 'flex' } 
            }}>
            <SearchInput/>
            <IconButton
              onClick={() => {handleOpenDrawer()}}
              key={'1'}
              sx={{ my: 2, color: '#333333', display: 'block' }}
            >
              <CartIconWithBadge
                itemCount={cart.length}
              />

            </IconButton>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default Navbar