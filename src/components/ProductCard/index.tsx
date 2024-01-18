import React from 'react'

import { Typography } from '@mui/material'

import { MdAddShoppingCart } from "react-icons/md"

import {
  CardContainer,
  ImageContainer,
  CardInfo,
  CardImage,
  ButtonDiv
} from './style'
import { useAppDispatch } from '../../../hooks'
import { addToCart } from '../../redux/cartSlice'

export interface ProductProps {
  id: number
  title: string
  thumbnail: string
  price: number
}

export const ProductCard: React.FC<ProductProps> = 
({
  id,
  title, 
  thumbnail, 
  price 
}: ProductProps) => {

  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: id,
      title: title,
      thumbnail: thumbnail,
      price: price
    }))
  }
  

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={thumbnail.replace(/\w\.jpg/gi,'W.jpg')}></CardImage>
      </ImageContainer>
      <CardInfo>
        <Typography
          variant='subtitle1'
          sx={{
            display: 'inline-block',
            height: '100px',
            whiteSpace: 'wrap',
            overflowY: 'hidden !important',
            textOverflow: 'ellipsis'
          }}
        >
          {title}
        </Typography>
        <ButtonDiv>
          <Typography
            variant='subtitle2'
          >
            R$ {price.toFixed(2).replace('.', ',')}
          </Typography>
          <MdAddShoppingCart
            onClick={() => handleAddToCart()}
          />
        </ButtonDiv>
      </CardInfo>
    </CardContainer>
  )
}