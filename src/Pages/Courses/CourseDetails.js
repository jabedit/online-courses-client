import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const details = useLoaderData()
    const {title, courseImg, requrement, description} = details;
    
    
    return (
        <div>
            <div className="course-details-card ">
        <div className="card-image">
          <img src={courseImg} alt="img" />
        </div>
        <div className="px-3">
          <h2 className="cart-title"> {title}</h2>
          <div className="coures-duration py-2">
            
            <div className="font-semibold text-lg py-2">
                <h5>Course description</h5> 
                <p>{description}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center card-footer-container items-center">
            
              <Link><button className="bg-indigo-500 px-2 py-2 rounded-lg text-white font-semibold ">Get premium access<FaArrowRight className="inline" /> </button></Link> 
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default CourseDetails;