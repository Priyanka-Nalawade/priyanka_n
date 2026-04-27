import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();
   
    const fetchCategories = async () => {
        try {
            const result = await fetch("https://dummyjson.com/products/categories");
            if (!result.ok) {
                throw new Error('API is not loading...');
            }
            const response = await result.json();
            setCategories(response);
        } catch (error) {
            setErr(error.message);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);
    // navigate 
 const categoriesDetails = (value)=>{
    navigate(`${value.slug}`)
 }
    // Filtered categories based on search
    const filteredCategories = categories.filter((item) =>
        item.slug.toLowerCase().includes(search.toLowerCase())
    );

    if (err) return <p className='text-red-500'>{err}</p>;

    return (
        <>
            <div className='px-6 py-2 flex justify-between items-center '>
                <h1 className='text-xl font-bold'>Category</h1>
                <div className='border'>
                    <input
                        className='p-1'
                        type="text"
                        placeholder='Category...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 mb-20'>
                {filteredCategories.map((item, index) => (
                    <div key={index} className='bg-gray-100 p-4'>
                        <h2 className='text-lg capitalize'>{item.slug}</h2>
                        <button className='hover:underline cursor-pointer text-blue-500'
                         onClick={() => categoriesDetails(item)}>
                            View Products
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}