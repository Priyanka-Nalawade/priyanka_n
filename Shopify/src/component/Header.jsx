import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  {NavLink} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Header() {
  return (
    <div className='flex align-center justify-between py-3 px-6'>
        <div className='text-4xl dark:text-white font-bold'>
          <NavLink to='/home'>Shopify</NavLink>
          
          </div> 
        <ul className='flex gap-5 text-xl font-bold dark:text-white'>
            <li><NavLink  className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"

            } to="/home">Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"

            }  to="/Products">Products</NavLink></li>
            <li><NavLink className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"

            }   to="/categories">Categories</NavLink></li>
            <li><NavLink  to="/"><PersonIcon fontSize='large'/></NavLink></li>
            <li><NavLink to="/"><ShoppingCartOutlinedIcon fontSize='large'/></NavLink></li>
            <li><NavLink to="/"><DarkModeOutlinedIcon fontSize='large'/></NavLink></li>
        </ul>
    </div>
  )
}
