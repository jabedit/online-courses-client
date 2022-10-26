import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './LeftSideBar.css'
import { BiCategory } from "react-icons/bi";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    

    useEffect(()=>{
        fetch(`http://localhost:5000/coures-categories`)
        .then(res=> res.json())
        .then(data=> setCategories(data))
    }, [])
    return (
        <div className='hidden md:block   pt-7 '>
            <div className='flex justify-start px-4'>
            <BiCategory />
            <h4 className='text-2xl pl-2'> Categories </h4>
            </div>
            {
                categories.map(category => <p className='categories' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    {console.log(category.id)}
                    
                </p>)
               

            }
           
        </div>
    );
};

export default LeftSideBar;