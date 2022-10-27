import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    const {title} = details;
    
    
    return (
        <div>
            <h2>This is news  {title}</h2>
        </div>
    );
};

export default CourseDetails;