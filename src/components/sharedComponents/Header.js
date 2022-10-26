import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div className='flex'>
            <div>
                <img src="../../assets/brand/apple-touch-icon.png" alt="" />
                <NavLink to="/">Code Academy</NavLink>
            </div>
            <nav >
                <ul className='flex' >
                    <li className='mr-2'>
                        <NavLink
                            to="/courses"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li className='mr-2'>
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
                    <li className='mr-2'>
                        <NavLink to='/login'>
                            Login

                        </NavLink>
                    </li>
                    <li className='mr-2'>
                        <NavLink to='/signup'>
                            Sign Up

                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;