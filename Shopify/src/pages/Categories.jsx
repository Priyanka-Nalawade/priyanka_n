import React, { useState,useEffect } from 'react'
export default function Categories(){
    const [categories,setCategories]=useState([]);
    const[err,setErr]=useState('')
     const fetchCategories= async()=>{
        try{
            const result=await fetch("https://dummyjson.com/products/categories");
            if(!result.ok){
                throw new Error('Api is not Loading...')
            }
            const respond = await result.json()
            setCategories(respond)
        }catch(error){
            setErr(error.message)
        }
     }
   
     useEffect(()=>{
        fetchCategories();
     },[])
      if(err) return(<p className='text-red'>{err}</p>)
    return(
       <div className='grid grid-cols-6 gap-4 p-6'>{
        categories.map((item, index)=>(
            <div  key={index} className='bg-gray-100 p-4'>
                <h2 className='text-lg capitalize'>{item.slug}</h2>
                <button className='hover:underline text-blue-500'>Know More</button>
            </div>
        ))
        }</div>
    )
}