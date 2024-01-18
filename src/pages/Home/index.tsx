import React, { useEffect, useState } from 'react'

import Navbar from '../../components/Navbar'
import Cart from '../../components/Cart'

import ProductsSection from '../../components/ProductsSection'

import {
  PageContainer,
  ContentWrapper
} from './style'

const Home: React.FC = () => {

  return (
    <PageContainer>
      <Cart/>
      <Navbar/>
      <ContentWrapper>  
        <ProductsSection/>
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home