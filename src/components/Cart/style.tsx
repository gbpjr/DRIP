import styled from 'styled-components'

import {
  Box,
  Typography
} from '@mui/material'

export const DrawerBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 250px;
  padding: 16px;
  gap: 24px;

` 
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow-y: scroll;
`

export const Item = styled(Typography)`
  display: flex;
  background: #FAFAFA;
  padding: 16px;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
`