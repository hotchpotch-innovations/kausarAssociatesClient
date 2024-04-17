import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <p className='text-xl'>Loading <span className="loading loading-dots loading-sm"></span></p>
        </div>
    );
};

export default loading;