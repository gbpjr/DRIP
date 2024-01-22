import React, { useEffect, useState } from 'react'

import Navbar from '../../components/Navbar'
import Cart from '../../components/Cart'
import ProductsSection from '../../components/ProductsSection'

import { Snackbar } from '@mui/material'

import {
  PageContainer,
  ContentWrapper
} from './style'

const Home: React.FC = () => {

  return (
    <PageContainer>
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      /> */}
      <Cart/>
      <Navbar/>
      <ContentWrapper>  
        <ProductsSection/>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home