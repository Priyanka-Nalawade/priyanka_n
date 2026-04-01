import React from 'react'
import Banner from '../component/Banner'
import Services from '../component/Services'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
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
]
  return (
    <div>
      <Banner/>
      <div className='flex'>
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
