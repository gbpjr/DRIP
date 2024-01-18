import React from 'react'
import Badge from '@mui/material/Badge'
import { GiShoppingCart } from 'react-icons/gi'

const CartIconWithBadge: React.FC<{ itemCount: number }> = ({ itemCount }) => {
  return (
    <Badge badgeContent={itemCount} color="primary">
      <GiShoppingCart 
        fontSize={24}
      />
    </Badge>
  )
}

export default CartIconWithBadge