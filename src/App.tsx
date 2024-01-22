import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home'
import Checkout from './pages/Checkout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App