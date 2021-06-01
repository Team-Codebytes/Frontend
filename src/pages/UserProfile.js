import React from 'react';
import { useHistory } from 'react-router-dom'
import { AvatarGenerator } from 'random-avatar-generator';


const UserProfile = () => {

         const history = useHistory();
    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();

    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/')
    }

    return (
        <div className="bg-gray-50 py-10">
            <div className="p-10 mx-auto md:w-8/12 shadow-md rounded-md bg-white h-screen">
                <div className="w-32 mr-2 ml-auto">
                    <button
                        onClick={()=>handleLogout()}
                        className=" text-xl font-semibold bg-red-400 text-white rounded p-2 px-4 ">Logout</button>

                </div>

                {/* <h1 className="text-3xl text-gray-800 text-center font-semibold">Update Profile</h1> */}

                <div className="mt-20">
                    <img src={avatar} alt="avatar" className="mx-auto w-32 m-4 opacity-80" />

                </div>

            </div>
        </div>
    );
}

export default UserProfile;