import React from 'react';

const SingleSubject = ({ subject }) => {
    const { logo, name, description } = subject;
    return (
        <div className="">
            <div className='border-2  mx-auto rounded-lg border-indigo-900 mb-7 p-6 w-1/2'>
                <img className='mx-auto w-1/2' src={logo} alt="" />
                <p className='text-xl font-bold text-indigo-900'>{name}</p>
                <p className='text-indigo-900'>{description}</p>
                <button className='mr-4 mt-6 hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600'>Details</button>

            </div>

        </div >
    );
};

export default SingleSubject;