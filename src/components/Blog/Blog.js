import React from 'react';


const Blog = () => {
    return (
        <div>
            <div className='border-2 m-4 rounded-xl border-indigo-500 hover:text-white hover:bg-sky-300 '>
                <h1 className='text-xl font-medium hover:text-white text-indigo-600 px-4 py-4'>1. what is `cors`?</h1>
                <p className='text-xl hover:text-white text-indigo-700 px-4 '><span className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>Answer</span>: Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was  A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos</p>


                <img className='w-2/5 mx-auto p-4' crossorigin src="https://mediastroke.com/blog/wp-content/uploads/2018/12/origin.png" alt="" />
            </div>
            <div className='border-2 m-4 rounded-xl  border-indigo-500 hover:bg-sky-300'>
                <h1 className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>2. Why are you using `firebase`? What other options do you have to implement authentication?
                </h1>
                <p className='text-xl hover:text-white text-indigo-700 px-4 '><span className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>Answer</span>: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <img className='w-2/5 mx-auto p-4' src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" alt="" crossorigin />
            </div>
            <div className='border-2 m-4 rounded-xl border-indigo-500 hover:bg-sky-300'>

                <h1 className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>3. How does the private route work?</h1>
                <p className='text-xl hover:text-white text-indigo-700 px-4 '><span className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>Answer</span>: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                <img className='w-2/5 mx-auto p-4' crossorigin src="https://miro.medium.com/max/1400/1*V0IJOwY7qtJMJNvSp4u6Og.png" alt="" />
            </div>
            <div className='border-2 m-4 rounded-xl border-indigo-500 hover:bg-sky-300'>
                <h1 className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>4. What is Node? How does Node work?</h1>
                <p className='text-xl hover:text-white text-indigo-700 px-4 '><span className='text-xl hover:text-white font-medium text-indigo-600 px-4 py-4'>Answer</span>: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <img className='w-2/5 mx-auto p-4 ' crossorigin src="https://qph.cf2.quoracdn.net/main-qimg-f0f8b07f2c9cd08071b0bd8a78f192f0-pjlq" alt="" />
            </div>
        </div>
    );
};

export default Blog;