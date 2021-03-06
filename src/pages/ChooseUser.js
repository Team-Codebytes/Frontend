import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Fade from 'react-reveal/Fade';


import userLogo from '../assets/user-logo.png'
import workerLogo from '../assets/worker-logo.png'
import orgLogo from '../assets/org-logo.png'


const ChooseUser = () => {
    return (
        <div className="bg-gray-50 ">
            <Navbar />

            <div className="py-20 text-center">
                <Fade bottom>
                <h1 className="text-4xl font-bold mb-12">Continue as</h1>
                <div className="flex md:flex-row flex-col justify-center">

                    <div className=" mb-6 flex flex-col justify-center items-center mx-10">
                        <Link to="/user-register">
                            <img src={userLogo} alt="user" className="hover:bg-green-100 w-40 bg-white rounded-full shadow-md p-4 " />
                        </Link>

                        <h2 className="text-center text-4xl font-semibold m-4">User</h2>
                        <span className="text-xl w-60">Who wants to find people to do their work</span>
                    </div>

                    <div className="mb-6 flex flex-col justify-center mx-10 text-center items-center">
                        <Link to="/enterprise-register">
                            <img src={orgLogo} alt="company" className="hover:bg-green-100 w-40 bg-white rounded-full shadow-md p-4 " />
                        </Link>

                        <h2 className="text-center text-4xl font-semibold m-4">Enterprise</h2>
                        <span className="text-xl w-60">Who wants to connect with workers</span>

                    </div>

                    <div className="mb-6 flex flex-col justify-center mx-10 text-center items-center">
                        <Link to="/worker-register">
                            <img src={workerLogo} alt="worker" className="hover:bg-green-100 w-40 bg-white rounded-full shadow-md p-4 " />
                        </Link>

                        <h2 className="text-center text-4xl font-semibold m-4">Worker</h2>
                        <span className="text-xl w-60">Who are looking for work opportunities</span>

                    </div>

                    </div>
                    </Fade>
            </div>
        </div>
    );
}

export default ChooseUser;