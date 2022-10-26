import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h1 className='mt-6 mb-7 text-4xl font-medium text-center text-indigo-600 mx-auto '>Sign Up</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-6 border mx-auto border-indigo-600' type="text" placeholder="Name" {...register("Name", { required: true })} />
                {errors.Name?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Name is required</p>}
                <input className='mt-6 border mx-auto border-indigo-600' type="email" placeholder="Email" {...register("Email", { required: true })} />
                {errors.Email?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Email is required</p>}
                <input className='mt-6 border mx-auto border-indigo-600' type="password" placeholder="Password" {...register("Password", { required: true, min: 6 })} />
                {errors.Password?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Password is required</p>}
                <input className='mt-6 border mx-auto border-indigo-600' type="text" placeholder="PhotoURL" {...register("photoURL", { required: true })} />
                {errors.photoURL?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">PhotoURL is required</p>}

                <input className='mx-auto  border px-16 py-2 mt-6 bg-indigo-600 text-white rounded' type="submit" />
            </form>
        </div>
    );
};

export default SignUp;