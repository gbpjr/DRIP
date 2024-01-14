import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path='/example' element={<Example />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App