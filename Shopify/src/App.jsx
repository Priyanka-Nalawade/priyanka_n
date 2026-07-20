import { useState,lazy,Suspense} from 'react'
import Footer from "./component/Footer"
import Header from './component/Header'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GoTop from './component/GoTop';
import NotFound from "./pages/NotFound"
import ProductDetails from './pages/ProductDetails';
import Loading from './component/Loading';

const Home =lazy(()=>import('./pages/Home'))
const Categories =lazy(()=>import('./pages/Categories'))
const CategoryDetails=lazy(()=>import('./pages/CategoryDetails'))
const Products= lazy(()=>import('../src/pages/Products'))

function App() {

  return (
   <BrowserRouter>
      <Header/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryDetails />} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense> 
      <Footer/>
      <GoTop/>
    </BrowserRouter>
  )
}

export default App
