import { useState } from 'react'
import Footer from "./component/Footer"
import Header from './component/Header'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import GoTop from './component/GoTop';
function App() {

  return (
   <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
      <GoTop/>
    </BrowserRouter>
  )
}

export default App
