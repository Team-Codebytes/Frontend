import React from 'react';
import { Link } from 'react-router-dom'
import userIcon from '../assets/bx-user.svg'
const Navbar = () => {
    return (
        <div className="bg-white  p-4 shadow-lg flex">
            <Link to="/">
                <h1 className="text-2xl font-bold text-green-300 md:mx-20">Unorganized</h1>
            </Link>
            <img src={userIcon} alt="user" className="md:mr-20 ml-auto w-8" />
        </div>
    );
}

export default Navbar;