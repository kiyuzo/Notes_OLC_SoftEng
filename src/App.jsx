import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import Archived from './pages/Archived'
import StartMenu from './pages/StartMenu'

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/archived' element={<Archived />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
