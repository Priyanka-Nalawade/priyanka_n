import {useEffect,useState} from 'react'

export default function useCategories(){
     const [err, setErr] = useState('')
     const [categories, setCategories] = useState([]);

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

    return  {categories,err}
}