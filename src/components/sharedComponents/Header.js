import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaToggleOn, FaToggleOff, FaUser } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <div className='flex justify-between items-center sticky top-0 bg-sky-300 py-7 px-5 text-indigo-600 text-xl font-medium'>
            <div className='flex  items-center'>

                <NavLink className='hover:text-white' to="/">Code Academy</NavLink>
            </div>
            <nav >
                <ul className='flex items-center ' >
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
                    <li className='mr-4'>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <img style={{ height: '30px' }} roundedCircle src={user?.photoURL} alt="" />
                                    :
                                    <FaUser></FaUser>
                            }
                        </Link>
                    </li>
                    <li >
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <button className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600' onClick={handleLogOut}>Log Out</button>
                                </>
                                :
                                <>
                                    <NavLink className='mr-4 border-2 rounded-lg px-5  hover:text-white' to='/login' >Login</NavLink>
                                    <NavLink className='mr-4  hover:bg-sky-300 text-white px-5 bg-indigo-600 border rounded-lg border-indigo-600' to='/signup'>Sign Up</NavLink>
                                </>
                        }
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