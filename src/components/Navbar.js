import React from 'react';
import { Link } from 'react-router-dom'
import userIcon from '../assets/bx-user.svg'
const Navbar = () => {
    return (
        <div className="bg-white  p-4 shadow-lg flex border-b-4">
            <Link to="/">
                <h1 className="text-2xl font-bold text-gray-600 md:mx-20">Unorganized</h1>
            </Link>
            <div className="md:mr-20 ml-auto">
                <Link to="/choose-user-type">
                    <span className="text-xl font-semibold bg-indigo-400 text-white rounded p-2 px-4">Register</span>
                </Link>

                {/* <Link to="/find-people">
                    <span className="text-xl font-semibold mx-4">Explore</span>
                </Link> */}
            </div>
            <img src={userIcon} alt="user" className=" w-8" />
        </div>
    );
}

export default Navbar;