import React, { useState } from 'react'

export default function useTheme(){
    const [dark,setDark]=useState(false);
    let toggleTheme=()=>{
        setDark((prev)=>!prev)
    }
    return {dark,toggleTheme}
}