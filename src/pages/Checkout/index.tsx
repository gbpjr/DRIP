import React, { useEffect } from 'react'
import { useAppSelector } from '../../../hooks'

const Checkout: React.FC = () => {

  const cart = useAppSelector((state) => state.cart)

  useEffect(() => {
    console.log(cart)
  })
  
  return (
    <>
     teste
    </>
  )
}

export default Checkout