import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import userIcon from '../assets/bx-user.svg'
import { useHistory } from 'react-router-dom'
import { AvatarGenerator } from 'random-avatar-generator';



const Navbar = () => {

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();


    const [currentUser, setCurrentUser] = useState('')
    const history = useHistory();


    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/')
        window.location.reload()
    }

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('user') !== null)) {


            let user = JSON.parse(localStorage.getItem('user'))
            // console.log(user._id)
            setCurrentUser({
                id: user._id,
                name: user.FirstName || user.CompanyName,
                userType: user.user_type,


            })

        }
    }, [])

    return (
        <div className="bg-white  p-5 shadow flex border-b-4 sticky top-0 z-10">
            <Link to="/">
                <h1 className="text-2xl font-bold text-gray-600 md:mx-20">Unorganized</h1>
            </Link>
            <div className="md:mr-20 ml-auto">
                {
                    localStorage.getItem('user') ?
                        <div className="flex">

                            <details className="shadow absolute bg-white   right-10  px-4 rounded border-2">
                                <summary className="curser-pointer bg-white  relative flex border-gray-300 shadow-sm ">
                                    <h1 className="text-xl curser-pointer capitalize font-semibold m-1 p-1">{currentUser.name}</h1>


                                    <img onError={(ev) => ev.target.src = avatar} src={`https://unorganisedsectorbackbnd.herokuapp.com/API/uploads/${currentUser.id}/${currentUser.userType}/Profile`} alt="user" className="curser-pointer m-1 ml-auto w-8 h-8 rounded-full opacity-80 " />
                                </summary>

                                <div className="text-xl pt-2 flex flex-col pb-2">
                                    <Link to="/" className="hover:bg-gray-100 p-2 border-t-1">Home</Link>
                                    <Link to="/profile" className="hover:bg-gray-100 p-2">My Profile</Link>
                                    <button
                                        onClick={() => handleLogout()}
                                        className="hover:bg-gray-100 p-2 text-left  font-semibold text-red-400">Logout</button>
                                </div>

                            </details>

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