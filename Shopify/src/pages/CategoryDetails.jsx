import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../component/Product';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CategoryDetails() {
  const [category, setCategory]=useState([]);
  const [err, setErr]=useState('');
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

   const categoryProduct = async()=>{
    try{
      const result= await fetch(`https://dummyjson.com/products/category/${slug}`)
      if (!result.ok){
        throw new Error('Failed to fetch products...')
      }
      const respond = await result.json();
      setCategory(respond.products);
    }catch(error){
      setErr(error.message);
    }finally {
    setLoading(false);
   }
  }
  useEffect(()=>{
    categoryProduct();
  },[slug])

  if(err) return (<p style={{color:"red"}}>{err}</p>);

  if (loading) return (<p>Loading....</p>)

  return ( 
    <>
     <div className='px-6 py-2 flex items-center '>
                <h1 className='text-xl'>Category <b style={{ textTransform: "capitalize" }}> <KeyboardArrowRightIcon/> {slug}</b></h1>
      </div>
    
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-2 p-6'>
      { 
      category.map((item,index)=>(
        <Product key={item.id} img={item.thumbnail} 
                                    category={item.category} 
                                    title={item.title}
                                    Ratings={item.rating}
                                    price={item.price}
                                    discountPercentage={item.discountPercentage}/>
      ) 
      )
      }
      
    </div>
    </>
  )
}
