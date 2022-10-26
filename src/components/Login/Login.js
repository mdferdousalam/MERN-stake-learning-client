import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider, sendPasswordResetEmail } from "firebase/auth";

import { AuthContext } from '../../context/AuthProvider/AuthContext';
import { FaGoogle, FaFacebook } from "react-icons/fa";



const Login = () => {
    const { providerLogin, userEmail, updateUserProfile, signIn, setuserEmail, auth } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const email = watch("Email");
    setuserEmail(email)
    const password = watch("Password")

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const onSubmit = () => {
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile()
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

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

    const handleFacebookLogin = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                // setUser(user)
                console.log(user);
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }



    const handleForgetPassword = () => {

        if (!userEmail) {
            alert('Please enter your email')
            return
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password reset email sent')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div>
            <h1 className='mt-6 mb-7 text-4xl font-medium text-center text-indigo-600 mx-auto '>Login</h1>

            <button onClick={handleGoogleLogin} className='border border-indigo-600 flex px-7 py-2 text-xl rounded-lg text-indigo-600 font-medium mx-auto items-center'><FaGoogle className='mr-5' />Login with Google</button>
            <button onClick={handleFacebookLogin} className='border border-indigo-600 flex px-5 mt-3 py-2 text-xl rounded-lg text-indigo-600 font-medium mx-auto items-center'><FaFacebook className='mr-4' />Login with Facebook</button>
            <h5 className='mx-auto text-center text-indigo-600 mt-6 font-medium'>---------------------------------or----------------------------------------</h5>

            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                <input className='mt-6 border mx-auto border-indigo-600' type="email" placeholder="Email" {...register("Email", { required: true })} />
                {errors.Email?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">Email is required</p>}
                <input className='mt-6 mx-auto border border-indigo-600' type="undefined" placeholder="Password" {...register("Password", { required: true })} />
                {errors.Password?.type === 'required' && <p className='text-center text-xl text-orange-500' role="alert">password is required</p>}
                <input className='mx-auto  border px-16 py-2 mt-6 bg-indigo-600 text-white rounded' type="submit" />
                <Link onClick={handleForgetPassword}  ><p className='text-center'><small className='text-indigo-700 font-bold'>Forgot your password?</small></p></Link>
                <p className='text-center'><small>Not registered yet?<Link className='text-indigo-700 font-bold' to='/signup'>Create an account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;