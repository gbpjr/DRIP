import React, { useEffect } from 'react'
import {
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
} from '@mui/material'

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { closeDrawer } from '../../redux/drawerSlice'
import { removeFromCart } from '../../redux/cartSlice'

import styled from 'styled-components'

import { CiCircleRemove } from "react-icons/ci"

const DrawerBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 200px;
  padding: 16px;

` 
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow-y: scroll;
`

const Item = styled(Typography)`
  display: flex;
  background: #FAE29C;
  padding: 16px;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
`


const Cart: React.FC = () => {

  const dispatch = useAppDispatch()
  const isDrawerOpen: boolean = useAppSelector((state) => state.isDrawerOpen)
  const cart = useAppSelector((state) => state.cart)

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  const handleRemoveFromCart = (data: any) => {
    dispatch(removeFromCart(data))
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