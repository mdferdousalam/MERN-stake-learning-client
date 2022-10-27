import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleSubject from './SingleSubject';

const Courses = () => {

    const allSubject = useLoaderData()

    const { index, id } = allSubject;
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                {
                    allSubject.map(n => <Link to={`https://b610-lerning-platform-server-side-mauve.vercel.app/subjects/${id}`} className='p-4 text-indigo-900 text-xl' key={index}> {n.name}</Link>)
                }
            </div>
            <div>
                {
                    allSubject.map(subject => <SingleSubject
                        key={subject.id}
                        subject={subject}

                    ></SingleSubject>)
                }
            </div>
        </div>
    );
};

export default Courses;