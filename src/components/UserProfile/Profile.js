import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider/AuthContext';

const Profile = () => {
    const { register, formState: { errors }, watch } = useForm();
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, photoURLRef);

    }


    return (
        <div>
            <h1 className='text-indigo-900 font-medium text-center mt-6'>Your profile</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input defaultValue={name} className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="text" placeholder="Enter Your Name" {...register("Name", { required: true })} />
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="email" placeholder="Email" {...register("Email", { required: true })} />
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="password" placeholder="Password" {...register("Password", { required: true, min: 6, pattern: /(?=.*[A-Z])/ })} />
                {errors.Password?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Password is required and atleast one capital Letter and special carecter</p>}
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="text" placeholder="PhotoURL" {...register("photoURL", { required: true })} />
                {errors.photoURL?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">PhotoURL is required</p>}
                <input className='mx-auto hover:bg-sky-300 hover:text-white border px-16 py-2 mt-6 mb-6 bg-indigo-600 text-white rounded' type="submit" />
            </form>
        </div>
    );
};

export default Profile;