import React from 'react'
import {useState, useEffect} from 'react'

export default function useOnline(){
    const [onlineStatus,setOnlineStatus]=useState(true)

    useEffect(()=>{
        window.addEventListener("offline", () => {
        setOnlineStatus(false)
        });

         window.addEventListener("online", () => {
        setOnlineStatus(true)
        });

    },[])

    return onlineStatus ;
}