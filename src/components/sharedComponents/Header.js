import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/courses' >Courses</Link>
            <h1>Header section</h1>
        </div>
    );
};

export default Header;