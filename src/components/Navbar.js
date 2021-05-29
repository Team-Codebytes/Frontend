import React from 'react';
import { Link } from 'react-router-dom'
import userIcon from '../assets/bx-user.svg'
const Navbar = () => {
    return (
        <div className="bg-white  p-4 shadow-lg flex">
            <Link to="/">
                <h1 className="text-2xl font-bold text-green-300 md:mx-20">Unorganized</h1>
            </Link>
            <div className="md:mr-20 ml-auto">
                <Link to="/choose-user-type">
                    <span className="text-xl font-semibold">Register</span>
                </Link>
            </div>
            <img src={userIcon} alt="user" className=" w-8" />
        </div>
    );
}

export default Navbar;