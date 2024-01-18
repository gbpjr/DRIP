import React, { useEffect, useState } from 'react'
import { ProductCard, ProductProps } from '../../components/ProductCard'

import fetchProducts from '../../api'

import styled from 'styled-components'
import { useAppSelector } from '../../../hooks'

const ProductsSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 573px) {
    margin: 0px;
    width: 100%;
    justify-content: center;
    align-items: center;    
  }
`

const ProductsSection: React.FC = () => {
  
  const [products, setProducts] = useState([])

  const search = useAppSelector((state) => state.search)

  useEffect(() => {
    fetchProducts(search).then((res) => {
      setProducts(res)
    })
  }, [search])

  return (
    <ProductsSectionWrapper>
    {
      products.map((product: ProductProps) => {
        return <ProductCard
          key={product.id}
          {...product}
        />
      })
    }
    </ProductsSectionWrapper>
  )
}

export default ProductsSection