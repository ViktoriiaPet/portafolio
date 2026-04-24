// import { useState } from 'react'
import { MenuPrimary } from './components/menu'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { About } from './pages/About'
import { Stack } from './pages/stack'
import { Blog } from './pages/blog'
import { Work } from './pages/work'

function App() {


  return (
    <BrowserRouter>
    <MenuPrimary />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/work" element = {<Work />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/stack" element = {<Stack />} />
      <Route path = "/blog" element = {<Blog />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
