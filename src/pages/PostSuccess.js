import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import thumbsupImg from '../assets/thumbs-up.jpg'

const PostSuccess = () => {
    return (
        <div className="bg-green-50 ">
            <Navbar />

            <div className="bg-white shadow p-20 rounded mx-auto  flex flex-row justify-center">
                <img src={thumbsupImg} className="w-3/12" alt="thank you" />
                <div className="w-1/3 my-auto">
                    <h1 className="text-4xl font-semibold">Your job post has been submitted <span className="text-green-500 font-bold">successfully.</span> </h1>
                    <h2 className="text-xl my-8 font-semibold">It will be available for all the registered workers on the platform to apply.</h2>
                    <Link to="/">
                        <button className="bg-gray-700 rounded-3xl p-2 px-6 text-white text-xl">Back to home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default PostSuccess;