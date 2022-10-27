import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf'

const ref = React.createRef()
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14, 12]
};
const Details = () => {
    const detal = useLoaderData()
    const { image, initial_release, latest_version, title, name, details, id } = detal
    return (
        <div className='text-indigo-900'>
            <div ref={ref}>
                <img className='w-1/2 mx-auto p-7' src={image} alt="" />
                <div className='flex justify-around font-bold'>
                    <p>Initial Release: {initial_release}</p>
                    <p>Latest Version: {latest_version} </p>
                </div>
                <h1 className='font-bold px-8'>{title}</h1>
                <p className='px-8 mb-4'>{details}</p>
                <div className='flex justify-evenly mb-20 mt-20'>
                    <Pdf targetRef={ref} filename={name} options={options} >{({ toPdf }) => <button onClick={toPdf} className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600'>Check Out</button>}</Pdf>
                    <button className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600'><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Details;