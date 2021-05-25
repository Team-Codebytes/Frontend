import React from 'react';
import userIcon from '../assets/bx-user.svg'
const Navbar = () => {
    return (
        <div className="bg-white  p-4 shadow-lg flex">
            <h1 className="text-2xl font-bold text-green-300 mx-20">Unorganized</h1>
            <img src={userIcon} className="mr-20 ml-auto w-8"/>
        </div>
     );
}
 
export default Navbar;