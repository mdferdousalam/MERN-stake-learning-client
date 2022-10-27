import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleSubject from './SingleSubject';

const Courses = () => {

    const allSubject = useLoaderData()


    console.log(allSubject)
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                {
                    allSubject.map(n => <Link to={`/course/details/${n.id}`} className='p-4 text-indigo-900 text-xl'> {n.name}</Link>)
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