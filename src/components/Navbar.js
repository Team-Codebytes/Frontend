import React from 'react';
import { Link } from 'react-router-dom'
import userIcon from '../assets/bx-user.svg'
import { useHistory } from 'react-router-dom'


const Navbar = () => {

    const history = useHistory();


    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/')
    }

    return (
        <div className="bg-white  p-4 shadow flex border-b-4 sticky top-0 z-10">
            <Link to="/">
                <h1 className="text-2xl font-bold text-gray-600 md:mx-20">Unorganized</h1>
            </Link>
            <div className="md:mr-20 ml-auto">
                {
                    localStorage.getItem('user') ?
                        <div className="flex">
                            {/* <Link to="/find-people">
                                <span className="text-xl font-semibold mx-4">Explore</span>
                            </Link> */}
                            <div className=" mx-2">
                                <button
                                    onClick={() => handleLogout()}
                                    className=" text-xl font-semibold bg-red-400 text-white rounded p-1 px-4 ">Logout</button>

                            </div>

                            <Link to="/profile">
                                <img src={userIcon} alt="user" className=" w-10 opacity-70" />
                            </Link>


                        </div> :
                        <div>
                            <Link to="/choose-user-type">
                                <span className="mx-2 text-xl font-semibold bg-indigo-400 text-white rounded p-2 px-4">Register</span>
                            </Link>

                            <Link to="/login">
                                <span className="mx-2 text-xl font-semibold bg-gray-500 text-white rounded p-2 px-4">Login</span>
                            </Link>
                        </div>

                }

            </div>
        </div>
    );
}

export default Navbar;