import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Product({img, category,title,Rating,price,discountPercentage}){
    return(
        <div className='border border-gray-200'>
            <div>
                <img src={img} alt="Product Img" />
            </div>
            <div className='border-t-1 border-gray-200 p-4'>
                <p className='text-gray-500 text-sm'>{category}</p>
                <h4 className='font-semibold hover:underline dark:text-white overflow-hidden text-ellipsis whitespace-nowrap block'>{title}</h4>
                <div>{Rating}</div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='font-medium text-blue-500 text-xl'> $ 99</div>
                        <div className='flex gap-4'>
                        <div className='line-through'>{price}</div>
                        <div>{discountPercentage} %</div>
                        </div> 
                    </div>
                    <div className='bg-pink-500 text-white p-1 px-3 border rounded-md hover:bg-blue-500 cursor-pointer'>
                        <ShoppingCartOutlinedIcon fontSize='small'/>
                    </div>
                </div>
            </div>
        </div>
    )
}