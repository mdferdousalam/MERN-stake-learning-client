import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthContext';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, verifyEmail } = useContext(AuthContext)


    const [success, setSuccess] = useState(false)

    const userName = watch("Name")
    const email = watch("Email");
    const password = watch("Password")
    const userPhotoURL = watch("photoURL")

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"


    const onSubmit = () => {
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                navigate(from, { replace: true })

                verifyEmail()
                    .then(() => {
                        alert('Successfully Done.Please chek email and verify')
                    })

            })
            .catch(error => {
                console.error(error)
            })


    }
    console.log(errors);



    return (
        <div>
            <h1 className='mt-7 mb-5 text-4xl font-medium text-center text-indigo-600 mx-auto '>Sign Up</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="text" placeholder="Name" {...register("Name", { required: true })} />
                {errors.Name?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Name is required</p>}
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="email" placeholder="Email" {...register("Email", { required: true })} />
                {errors.Email?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Email is required</p>}
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="password" placeholder="Password" {...register("Password", { required: true, min: 6, pattern: /(?=.*[A-Z])/ })} />
                {errors.Password?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Password is required and atleast one capital Letter and special carecter</p>}
                <input className='mt-6 text-indigo-600 border mx-auto border-indigo-600' type="text" placeholder="PhotoURL" {...register("photoURL", { required: true })} />
                {errors.photoURL?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">PhotoURL is required</p>}

                <input className='mx-auto hover:bg-sky-300 hover:text-white border px-16 py-2 mt-6 bg-indigo-600 text-white rounded' type="submit" />
                <p className='text-center'><small>Already have an account?<Link className='text-indigo-700 hover:bg-sky-300 hover:text-white font-bold' to='/login'>Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;