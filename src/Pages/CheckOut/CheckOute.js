import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOute = () => {
    const checkOutInfo = useLoaderData()
    return (
        <div>
            This is Check oute page {checkOutInfo.title}
        </div>
    );
};

export default CheckOute;