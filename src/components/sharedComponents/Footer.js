import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-indigo-900'>
            <div className='bg-gray-900 text-white flex justify-evenly'>
                <div className='p-4'>
                    <h4 className='font-bold'>About Us</h4>
                    <p>Code Academy</p>
                    <p>info@codeacademy.com</p>
                    <p>100 P F L way, Livingston, MT 59047</p>
                    <p>800-924-2041</p>
                </div>
                <div className='p-4'>
                    <h4>Follow Us</h4>
                    <div className='flex p-2 '>
                        <Link className='mr-2' to='#' ><span ><FaFacebook></FaFacebook></span></Link>
                        <Link className='mr-2' to='#'><span ><FaTwitter></FaTwitter></span></Link>
                        <Link className='mr-2' to='#'><span ><FaLinkedin></FaLinkedin></span></Link>
                        <Link to='#' className='mr-2'><span ><FaYoutube></FaYoutube></span></Link>
                        <Link to='#' className='mr-2'><span  ><FaInstagram></FaInstagram></span></Link>
                    </div>
                </div>
                <div className='p-4'>
                    <h4 className='font-medium'>Help</h4>
                    <ul>
                        <li> <Link className='mr-3' to='/faq'>FAQ</Link></li>
                        <li> <Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className='p-4' >
                    <h4>Terms & Conditions</h4>
                    <ul>
                        <li><Link to='#'><p>Terms of Service</p></Link></li>
                        <li><Link to='#'><p>Privacy policy</p></Link></li>
                        <li><Link to='#'><p>Digital Rights Policy</p></Link></li>
                        <li><Link to='#'><p>Cookies Statement</p></Link></li>
                    </ul>
                </div>
            </div>
            <div className='bg-gray-700 text-white text-center p-4'>
                <p><small>Copyright @ 2022, All right reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;