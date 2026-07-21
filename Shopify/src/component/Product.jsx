import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import {useNavigate} from 'react-router-dom'

export default function Product({
  id,
  img,
  category,
  title,
  Ratings,
  price,
  discountPercentage,
}) {
   const navigate = useNavigate();
   const productDetails = ()=>{
    navigate(`/products/${category}/${id}`)
   }
  return (
    <div className="border border-gray-200">
      <div className='cursor-pointer' onClick={productDetails}>
        <img src={img} alt="Product Img" />
      </div>
      <div className="border-t border-gray-200 p-4">
        <p className="text-gray-500 text-sm">{category}</p>
        <h4 onClick={productDetails} className="cursor-pointer font-semibold hover:underline dark:text-white overflow-hidden text-ellipsis whitespace-nowrap block">
          {title}
        </h4>
        <div className="flex">
          <Box sx={{ display: "flex", alignItems: "center", marginRight:'10px' }}>
            <Rating value={Ratings} size="small" />
          </Box>

          {Ratings}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium text-blue-500 text-xl"> $ 99</div>
            <div className="flex gap-4">
              <div className="line-through">{price}</div>
              <div>{discountPercentage} %</div>
            </div>
          </div>
          <div className="bg-pink-500 text-white p-1 px-3 border rounded-md hover:bg-blue-500 cursor-pointer">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
// heigher order component

export const limitedStock = (Product)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-red-600 text-xs p-2 font-bold rounded-sm" >Limited Stock</label>
        <Product {...props}/>
      </div>
      
    ) 
  }
}