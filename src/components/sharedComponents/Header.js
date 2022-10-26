import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div className='flex justify-between sticky top-0 bg-sky-300 py-7 px-5 text-indigo-600 text-xl font-medium'>
            <div>
                <img src="../../assets/brand/apple-touch-icon.png" alt="" />
                <NavLink className='hover:text-white' to="/">Code Academy</NavLink>
            </div>
            <nav >
                <ul className='flex' >
                    <li className='mr-4 hover:text-white'>
                        <NavLink
                            to="/courses"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li className='mr-4 hover:text-white'>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li className='mr-4 hover:text-white'>
                        <NavLink to="/blog">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    Blog
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li className='mr-4 border-2 rounded-lg px-5  hover:text-white'>
                        <NavLink to='/login' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>
                            Login

                        </NavLink>
                    </li>
                    <li className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600'>
                        <NavLink to='/signup' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>
                            Sign Up

                        </NavLink>
                    </li>
                    <li>
                        <FaToggleOn title='Light' className='hover:text-white'></FaToggleOn>
                        <FaToggleOff title='Dark' className='hover:text-white'></FaToggleOff>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;