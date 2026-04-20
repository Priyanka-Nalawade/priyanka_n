import React, { useState,useEffect } from 'react'
import Product from '../component/Product';

export default function Products(){
    const[product,setProduct]=useState([]);
    const [err,setErr]= useState('')

    const productList = async()=>{
        try{
            const result = await fetch("https://dummyjson.com/products?limit=500");
            if(!result){
                throw new Error('Api is fail to Load ....')
            }
            const respond= await result.json()
            setProduct(respond.products)

        }catch(Error){

            setErr(Error.message)
        }
    }
    
    useEffect(()=>{
       productList(); 
    },[])
    if (err) return (<p>{err}</p>)
    return(
        <>
        <div className='px-6 py-2 flex justify-between items-center '>
                <h1 className='text-xl font-bold'>Products</h1>
                <div className='border'>
                    <input
                        className='p-1'
                        type="text"
                        placeholder='...'
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-2 p-6'>
            {
                product.map((item,index)=>(
                   <Product key={item.id} img={item.thumbnail} 
                            category={item.category} 
                            title={item.title}
                            Ratings={item.rating}
                            price={item.price}
                            discountPercentage={item.discountPercentage}/>
                ))
            }

        </div>
        </>
    )
}