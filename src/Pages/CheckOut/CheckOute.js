import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOute = () => {
    const checkOutInfo = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className='course-card '>
            <h3> {checkOutInfo.title} </h3>
            { user? <h3> Thank you for joining this course { user.displayName } </h3> : '' }
            
        </div>
    );
};

export default CheckOute;