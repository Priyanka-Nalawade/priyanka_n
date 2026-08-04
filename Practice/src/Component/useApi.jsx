import React, { useState,useEffect } from 'react'

export default function useApi(){
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [err, setError]=useState('');

    let fetchData = async()=>{
        try {
            let respond = await fetch('https://dummyjson.com/users');
            if(!respond.ok){
                throw new Error('Api is not Loading ...')
            }
            let result = await respond.json();
            console.log(result.users)

            setUser(result.users)
            
        } catch (error) {
           setError(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return {user,loading,err}
}