import React, { useEffect } from 'react'
import {
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
} from '@mui/material'

import {
  DrawerBody,
  ItemWrapper,
  Item,
  ListItem
} from './style'

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { closeDrawer } from '../../redux/drawerSlice'
import { removeFromCart } from '../../redux/cartSlice'

import { CiCircleRemove } from "react-icons/ci"


const Cart: React.FC = () => {

  const dispatch = useAppDispatch()
  const isDrawerOpen: boolean = useAppSelector((state) => state.isDrawerOpen)
  const cart = useAppSelector((state) => state.cart)

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  const handleRemoveFromCart = (data: any) => {
    dispatch(removeFromCart(data.id))
  }

  const total = cart.reduce((accumulator, obj) => {
    return accumulator + obj.price
  }, 0)

  useEffect(() => {
  }, [cart])

  return (
    <Drawer
      anchor={'right'}
      open={isDrawerOpen}
      onClose={() => handleCloseDrawer()}
      >
      <DrawerBody>
        <Typography
          variant='h2'
        >
          Carrinho
        </Typography> 
        <ListItem>
          {
            cart.map((item) => {
              return (
                <ItemWrapper>
                  <Item key={Math.random() + item.id}>
                    {item.title} - R$ {item.price}
                  </Item>
                  <IconButton
                    sx={{height: '40px'}}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <CiCircleRemove 
                      color='red'
                    />
                  </IconButton>
                </ItemWrapper>

              )
            })
          }  
        </ListItem>
        
        <div>
          <Typography
            variant='h6'
          >
            Total: R$ {total.toFixed(2)}
          </Typography>
          <Button>
            Finalizar compra
          </Button>
        </div>
      </DrawerBody>
    </Drawer>
  )
}

export default Cart