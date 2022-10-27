import React from 'react';
import { Link } from 'react-router-dom';

const SingleSubject = ({ subject }) => {
    const { logo, name, description, id, skill_Level, Lessons } = subject;
    return (
        <div className="">
            <div className='border-2  mx-auto rounded-lg border-indigo-900 mb-7 p-6 w-1/2'>
                <img className='mx-auto w-1/2' src={logo} alt="" />
                <p className='text-xl font-bold text-indigo-900'>{name}</p>
                <p className='text-indigo-900'>{description}</p>
                <div className='flex items-center mt-6 align-middle justify-between'>
                    <p className='text-indigo-900 font-medium'>Skill Level: {skill_Level}</p>
                    <p className='text-indigo-900 font-medium'>Lessons: {Lessons}</p>
                    <button className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600'><Link to={`/details/${id}`}>Details</Link></button>
                </div>

            </div>

        </div >
    );
};

export default SingleSubject;