import React from 'react';

import userLogo from '../assets/user-logo.png'
import workerLogo from '../assets/worker-logo.png'
import orgLogo from '../assets/org-logo.png'


const ChooseUser = () => {
    return (
        <div className="bg-gray-50 py-36 text-center">
            <h1 className="text-4xl font-bold mb-12">Register as</h1>
            <div className="flex md:flex-row flex-col justify-center">


                <div className="flex flex-col justify-center items-center mx-10">
                    <img src={userLogo} className="w-40 bg-white rounded-full shadow-md p-4 " />
                    <h2 className="text-center text-4xl font-semibold m-4">User</h2>
                    <span className="text-xl w-60">Who wants to find people to do their work</span>
                </div>

                <div className="flex flex-col justify-center mx-10 text-center items-center">
                    <img src={orgLogo} className="w-40 bg-white rounded-full shadow-md p-4 " />
                    <h2 className="text-center text-4xl font-semibold m-4">Enterprise</h2>
                    <span className="text-xl w-60">Who wants to connect with workers</span>

                </div>

                <div className="flex flex-col justify-center mx-10 text-center items-center">
                    <img src={workerLogo} className="w-40 bg-white rounded-full shadow-md p-4 " />
                    <h2 className="text-center text-4xl font-semibold m-4">Worker</h2>
                    <span className="text-xl w-60">Who are looking for work opportunities</span>

                </div>

            </div>
        </div>
    );
}

export default ChooseUser;