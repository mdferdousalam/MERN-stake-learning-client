import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div className='flex justify-between items-center sticky top-0 bg-sky-300 py-7 px-5 text-indigo-600 text-xl font-medium'>
            <div className='flex  items-center'>
                <img className=' w-1/12 rounded-lg mr-3' src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/312350581_2162627384074110_7346691215930846379_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG_AhmfBjCEWTk7aPVUXTXi7kvowm6q0HPuS-jCbqrQc3KH6yPjzknhOTaC1zGseI-5POLHKEtZx1_xcZ9SvgGs&_nc_ohc=YqWEta1tZt8AX8jOBSa&tn=Ze0gaH_Il7KNw1h4&_nc_pt=1&_nc_ht=scontent.fdac24-2.fna&oh=00_AT_gmwN1cFnOLGFibAlqy4vVZmQWejS4zPoq_8drqeSWCw&oe=635EE046" alt="" />
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