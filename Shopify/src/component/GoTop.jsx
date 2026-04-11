import React from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function GoTop (){
     const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return(
        <div onClick={scrollToTop} 
             className="bg-gray-800 text-white flex items-center justify-center
              cursor-pointer fixed bottom-5 right-5 rounded-full opacity-50 hover:opacity-100" 
             >
            <KeyboardArrowUpOutlinedIcon fontSize="large"/>
        </div>
    )
}