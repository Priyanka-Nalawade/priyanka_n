import { useState } from 'react'
import Footer from "./component/Footer"
import Header from './component/Header'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Categories from './pages/Categories';
import GoTop from './component/GoTop';
import Products from "../src/pages/Products"
import NotFound from "./pages/NotFound"
function App() {

  return (
   <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/Products' element={<Products/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <GoTop/>
    </BrowserRouter>
  )
}

export default App
