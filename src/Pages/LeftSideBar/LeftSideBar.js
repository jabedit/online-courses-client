import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import './LeftSideBar.css'
import { BiCategory } from "react-icons/bi";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    
    

    useEffect(()=>{
        fetch(`https://educational-website-server-eight.vercel.app/coures-categories`)
        .then(res=> res.json())
        .then(data=> setCategories(data))
    }, [])
    return (
        <div  className=' md:block  '>
            <div className='flex justify-start px-4 text-indigo-600'>
            <BiCategory />
            <h4 className='text-xl pl-2'> Categories </h4>
            </div>
            {
                categories.map(category => <p className='categories text-md font-semibold ' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    
                    
                </p>)
               

            }
           
        </div>
    );
};

export default LeftSideBar;