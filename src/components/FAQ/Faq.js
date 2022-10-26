import React from 'react';

const Faq = () => {
    return (
        <div className='text-indigo-700 p-7'>
            <h2 className='text-xl font-bold text-center text-indigo-700'> Common questions about for a Programmer</h2>
            <div>
                <h1 className='text-xl font-bold '>Is there a difference between a coder and a programmer?</h1>
                <p>Although the main activity for both coders and programmers is coding, programmers typically have a more complex set of tasks they need to perform. Coders usually solely write application code in the programming language they are instructed to, whereas programmers also need to create software functions, develop automation logic and solve various problems.</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>What skills do programmers need?</h1>
                <p>The most important skills for a programmer are:

                    Mathematical skills: A basic understanding of both arithmetic and algebra is essential for programming.
                    Problem-solving: A significant amount of a programmer's time is spent on solving various issues with the software.
                    Communication: Most software development jobs are team efforts, so programmers need to be able to successfully communicate with other team members.
                    Computer skills: Most programmers have computer knowledge beyond the programming languages they routinely use.</p>
            </div>
            <div>

            </div>
            <div>
                <h1 className='text-xl font-bold'>What is MERN Stack?</h1>
                <p>The MERN stack is the most popular stacks used to create dynamic web interfaces. It’s composed of MongoDB, Express.js, React, and Node.js. The MERN stack is majorly used in social media platforms and news aggregation applications. Prominent companies like Netflix and Uber has been using MERN stack in their web development.

                    React is the most popular JavaScript library and it is primarily used to build single-page applications and mobile applications. React makes it simple to create and manage the user interface (UI) of an application.

                    When put together with MongoDB, Express.js, and Node.js, React gives you a JavaScript-based, developer-friendly and cost-effective tech stack.</p>
            </div>
            <h1 className='text-xl font-bold text-center mt-7 border rounded-lg bg-sky-300 hover:text-white'>Steps to become a MERN Stack Developer</h1>
            <div className='text-xl font-bold text-center mx-auto'>
                <ul className='text-xl font-bold mx-auto'>
                    <li><h1>Learn Front-End Programming Languages</h1></li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Learn Using Front End Tools</li>
                    <li>Understand the Basics of Website Design</li>
                    <li>Learn React</li>
                    <li>Learn Back End Components of MERN Stack</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>


            </div>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold text-center mt-7 border rounded-lg bg-sky-300 hover:text-white'>Roadmap of front end Developer</h1>
                <img src="https://miro.medium.com/max/1081/1*WWkUziCc9vBMtzkKOyYoJQ.png" alt="" />
            </div>

            <div className='flex flex-col '>
                <h1 className='text-xl font-bold text-center mt-7 border rounded-lg bg-sky-300 hover:text-white'>Roadmap of Backend Technology</h1>
                <img className='mt-7' src=" https://www.freecodecamp.org/news/content/images/2020/08/backend.png" alt="" />
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Faq;