import React from 'react';
import { Link } from 'react-router-dom'
import userIcon from '../assets/bx-user.svg'

const Navbar = () => {
//     const [isLoggedIn, setIsLoggedIn] =useState(false)

//     useEffect(() => {
//         if (!localStorage.getItem('user')) {
// setIsLoggedIn(true)
//         }

//     },[isLoggedIn])


    return (
        <div className="bg-white  p-4 shadow-lg flex border-b-4">
            <Link to="/">
                <h1 className="text-2xl font-bold text-gray-600 md:mx-20">Unorganized</h1>
            </Link>
            <div className="md:mr-20 ml-auto">
                {
                   localStorage.getItem('user') ?
                        <div className="flex">
                            <Link to="/find-people">
                                <span className="text-xl font-semibold mx-4">Explore</span>
                            </Link>
                            <Link to="/profile">
                                <img src={userIcon} alt="user" className=" w-8" />
                            </Link>
                        </div> :
                        <div>
                            <Link to="/choose-user-type">
                                <span className="mx-2 text-xl font-semibold bg-indigo-400 text-white rounded p-2 px-4">Register</span>
                            </Link>

                            <Link to="/choose-user-type">
                                <span className="mx-2 text-xl font-semibold bg-gray-500 text-white rounded p-2 px-4">Login</span>
                            </Link>
                        </div>

                }

            </div>
        </div>
    );
}

export default Navbar;