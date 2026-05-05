// import { useState } from 'react'
import { MenuPrimary } from './components/menu'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { LayoutMenu } from './components/LayoutMenu'
import { About } from './pages/about'
import { Stack } from './pages/stack'
import { Blog } from './pages/blog'
import { Work } from './pages/work'

function App() {


  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LayoutMenu />} />
      <Route path = "/work" element = {<>
          <MenuPrimary />
          <Work />
        </>} />
      <Route path = "/about" element = {<>
          <MenuPrimary />
          <About />
        </>} />
      <Route path = "/stack" element = {<>
          <MenuPrimary />
          <Stack />
        </>} />
      <Route path = "/blog" element = {<>
          <MenuPrimary />
          <Blog />
        </>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
