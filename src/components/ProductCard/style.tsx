import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 175px;
  padding: 24px;
  // border: 1px solid black;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    transition: 0.25s;
  }
`

export const ImageContainer = styled.div`
  max-width: 100%;
  height: 250px;

  &:hover {
    cursor: pointer;
    transition: 0.25s;
    height: 275px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  // padding: 8px 0;
  height: 100px;
 
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ButtonDiv = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`