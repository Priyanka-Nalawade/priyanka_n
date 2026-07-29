import React, { useContext } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  {NavLink} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LoginUser from '../Context/LoginUser';
import { useSelector } from 'react-redux';


export default function Header() {
  const {name}= useContext(LoginUser)
  const cartCount=useSelector((state)=>state.cart.value.length)
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
            <li><NavLink  to="/">
            {name}
            </NavLink>
            {/* <PersonIcon fontSize='large'/></NavLink> */}
            </li>
            <li><NavLink to="/cart" className='relative'><ShoppingCartOutlinedIcon fontSize='large'/>
            <div className='absolute bg-pink-500 text-center text-white text-sm p-1 rounded-full top-[-15px] right-[-10px] w-[25px] h-[25px]'>
              {cartCount}
            </div>
            
            </NavLink></li>
            <li><NavLink to="/"><DarkModeOutlinedIcon fontSize='large'/></NavLink></li>
        </ul>
    </div>
  )
}
