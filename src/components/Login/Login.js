import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { AuthContext } from '../../context/AuthProvider/AuthContext';
import { FaGoogle } from "react-icons/fa";



const Login = () => {
    const { providerLogin } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // setUser(user)
                console.log(user);
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }


    return (
        <div>
            <h1 className='mt-6 mb-7 text-4xl font-medium text-center text-indigo-600 mx-auto '>Login</h1>

            <button onClick={handleGoogleLogin} className='border border-indigo-600 flex px-7 py-2 text-xl rounded-lg text-indigo-600 font-medium mx-auto items-center'><FaGoogle className='mr-5' />Login with Google</button>
            <button onClick={handleGoogleLogin} className='border border-indigo-600 flex px-7 py-2 text-xl rounded-lg text-indigo-600 font-medium mx-auto items-center'><FaGoogle className='mr-5' />Login with Google</button>


            <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-6 border mx-auto border-indigo-600' type="email" placeholder="Email" {...register("Email", { required: true })} />
                {errors.Email?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Email is required</p>}
                <input className='mt-6 mx-auto border border-indigo-600' type="undefined" placeholder="Password" {...register("Password", { required: true })} />
                {errors.Password?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">password is required</p>}
                <input className='mx-auto  border px-10 py-2 mt-6 bg-indigo-600 text-white rounded' type="submit" />
                <Link  ><p className='text-center'><small>Forgot your password?</small></p></Link>
            </form>
        </div>
    );
};

export default Login;