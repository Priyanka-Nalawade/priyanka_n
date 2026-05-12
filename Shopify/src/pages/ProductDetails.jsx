import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails(){
    const [prodDetail,setprodDetail]=useState();
    const [err,setError]=useState('')
    const [loading,setloading]=useState(true)
    const {category,id}=useParams()
    const prodFetch=async()=>{
        try{
        const result=await fetch(`https://dummyjson.com/products/${id}`)
        if(!result.ok){
            throw new Error('Api is fail to Load ....')
        }
            const respond =await result.json();
            console.log(respond)
            setprodDetail(respond)
        }catch(error){
           setError(error.message) 
        }finally{
            setloading(false)
        }
    }
    useEffect(()=>{
        prodFetch();
    },[])

     if(loading) return(<p>loading ...</p>)
     if (err) return (<p>{err}</p>)
    return(
       <>
       <div>
            <div>{prodDetail.title}</div>
       </div>
       {/* <div>
            <div>Similar Produacts</div>
            <div>{}</div>
       </div> */}
       </>
    )
}