import React from 'react';
import Navbar from '../components/Navbar'

import { AvatarGenerator } from 'random-avatar-generator';


const UserProfile = () => {

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();

    

    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-10">
                <div className="p-10 mx-auto md:w-8/12 shadow-md rounded-md bg-white h-screen">
                   

                    {/* <h1 className="text-3xl text-gray-800 text-center font-semibold">Update Profile</h1> */}

                    <div className="mt-20">
                        <img src={avatar} alt="avatar" className="mx-auto w-32 m-4 opacity-80" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserProfile;