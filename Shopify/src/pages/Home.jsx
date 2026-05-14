import React, { useEffect, useState } from 'react'
import Banner from '../component/Banner'
import Services from '../component/Services'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Product from '../component/Product'
import Offer from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom';


export default function Home() {

  // Services Cards
  const serviceCard = [{
    img:<LocalShippingOutlinedIcon/>,
    title:'Free Delivery',
    discription:'Orders from all items'
  },
  {
    img:<CurrencyExchangeOutlinedIcon/>,
    title:'Return & Refund',
    discription:'Money back guarantee'
  },
   {
    img:<LocalOfferOutlinedIcon/>,
    title:'Member Discount',
    discription:'On order over $99'
  },
   {
    img:<SupportAgentOutlinedIcon/>,
    title:'Support 24/7',
    discription:'Contact us 24 hours a day'
  }
]

// Product Api Integration
 const [Api,setApi]= useState([])

 const fetchApi = async()=>{
  const respond = await fetch('https://dummyjson.com/products');
  const result = await respond.json();
  setApi(result.products)
 }
useEffect(()=>{
  fetchApi();
},[])

  return (
    <div>

      {/* Banner Section */}
      <Banner/>

      {/* Services Section */}
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2 p-6'>
      {
        serviceCard.map((v)=>{
          return(
            <Services img={v.img} title={v.title} discription={v.discription}/>
          )
        })
      }
      </div>

       {/* Trending Products Section */}
       <div className='p-6'>
        <h2 className='text-4xl font-bold pb-4'>Trending Products</h2>
        <div className='grid grid-cols-4 gap-4' >
          {
            Api.slice(0,24).map((v)=>{
              return(
                <Product key={v.id} id={v.id} img={v.thumbnail}  category={v.category} title={v.title} Ratings={v.rating}  price={v.price} discountPercentage={v.discountPercentage}/>
              )
            })
          }
        </div>
       </div>

        {/* Offer Section */}
        <div className='flex m-6'>
          <div className='flex-1'>
            <img src={Offer} alt="offer Img" />
          </div>
          <div className='flex-1 flex justify-center item-center flex-col
               bg-[#e3edf6] dark:bg-slate-600 dark:text-white  
               items-center text-center justify-center p-4 '>
            <h2 className='text-4xl text-black font-bold center'>Don't miss the offer !</h2>
            <h2 className='text-4xl text-black font-bold center'>Grab it now</h2>
            <Link to='/Products'><button className='bg-white font-semibold rounded-sm py-2 mt-4 px-4'>Shop Now</button></Link>
            
          </div>
        </div>

        {/* New Arrivals Section */}
       <div className='p-6 mb-20'>
        <h2 className='text-4xl font-bold pb-4'>New Arrivals</h2>
        <div className='grid grid-cols-4 gap-4' >
          {
            Api.slice(25,48).map((v)=>{
              return(
                <Product key={v.id} img={v.thumbnail}  category={v.category} title={v.title} Rating={v.rating}  price={v.price} discountPercentage={v.discountPercentage}/>
              )
            })
          }
        </div>
       </div>
    </div>
  )
}
