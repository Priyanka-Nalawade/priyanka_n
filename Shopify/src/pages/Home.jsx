import React from 'react'
import Banner from '../component/Banner'
import Services from '../component/Services'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
export default function Home() {
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
  return (
    <div>
      <Banner/>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2 p-6'>
      {
        serviceCard.map((v)=>{
          return(
            <Services img={v.img} title={v.title} discription={v.discription}/>
          )
        })
      }
      </div>
      
    </div>
  )
}
