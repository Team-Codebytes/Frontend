import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import peopleImg1 from '../assets/people1.jpg'
import peopleImg2 from '../assets/people2.jpg'
import searchIcon from '../assets/bx-search.svg'
import commentIcon from '../assets/bx-comment.svg'
import peopleIcon from '../assets/people.svg'
import groupImg from '../assets/group.jpg'
import banner from '../assets/banner.jpg'
import workersImg from '../assets/workers.jpg'






const Home = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {

        if (localStorage.getItem('user')) {
            setLoggedIn(true)

        } else {
            setLoggedIn(false)
        }


    },[])

    return (
        <div className="bg-gray-50 ">
            <Navbar />

            <div className="pt-28 flex flex-col-reverse justify-center">
                <div className="pt-4">
                    <h1 className=" text-center text-3xl md:text-5xl py-2 text-gray-700 font-bold">Find people for your work.</h1>
                    <h1 className="   text-center text-3xl md:text-5xl py-2 text-gray-700 font-bold">find work for you.</h1>
                    <h1 className=" py-4 text-center text-xl font-semibold italic ">A centralized platform for the unorganized sector</h1>
                </div>

                {

                    loggedIn ?

                        <div className="flex flex-row justify-center md:py-2 py-6 md:px-20">
                            <div className="mx-4">
                                <img src={commentIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                <Link to="/job-info-form">

                                    <button className="bg-purple-400 text-xl m-4 font-bold shadow rounded-md px-8 py-4 text-white">Post a job</button>
                                </Link>
                            </div>

                            <div className="mx-4">
                                <img src={searchIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                <Link to="/search-jobs">
                                    <button className="bg-pink-400 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find a job</button>
                                </Link>
                            </div>

                            <div className="mx-4">
                                <img src={peopleIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                <Link to="/find-people">
                                    <button className="bg-gray-600 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find workers</button>
                                </Link>
                            </div>

                        </div> :
                        <div></div>

                }

            </div>

            <div className="flex flex-row mt-20">
                <img src={peopleImg1} alt="illustration" className="w-1/2 opacity-70	" />
                <img src={peopleImg2} alt="illustration" className="w-1/2 opacity-70	" />
            </div>


            <div className="bg-purple-300 px-20 pt-10">

                <div className="w-8/12 px-12 mx-auto  rounded-full mb-10 text-white text-center py-10 bg-gray-600">
                    <h1 className="text-3xl font-semibold ">According to the report of Economic Survey released in 2019, the unorganized sector accounts for 93% of the total workforce of the country.</h1>

                </div>


                <div className="bg-white p-10 rounded-2xl ">

                    <div className="w-8/12 mx-auto flex flex-row justify-center items-center py-10">

                        <img src={groupImg} alt="people" className="w-1/2  opacity-60" />
                        <div className="w-1/2 m-10">
                            <h1 className="text-3xl font-semibold ">Get access to the skilled workers and hire staff for the job</h1>
                        </div>

                    </div>


                    <div className="w-8/12 mx-auto flex flex-row-reverse justify-center items-center py-10">

                        <img src={workersImg} alt="workers" className="w-1/2 opacity-60" />
                        <div className="w-1/2 m-10">
                            <h1 className="text-3xl font-semibold ">Find Jobs based on your skills and experience</h1>
                        </div>

                    </div>


                    <div className="w-8/12 mx-auto flex flex-row justify-center items-center py-10">

                        <img src={banner} alt="post" className="w-1/3 rounded-full opacity-60" />
                        <div className="w-1/2 m-20">
                            <h1 className="text-3xl font-semibold ">Post jobs on the platform based on your requirements</h1>
                        </div>

                    </div>

                    {!loggedIn ?
                        <Link to="/choose-user-type">

                        <div className="w-full flex items-center mx-auto py-10 bg-gray-50">
                            <button className="focus:outline-none w-80 mx-auto bg-purple-400 hover:bg-green-400 text-3xl m-4 font-bold shadow rounded-full px-8 py-4 text-white">Register Now</button>
                        </div>
                        </Link>
                        :
                        <div></div>
                        
}
                    




                </div>
            </div>



        </div>
    );
}

export default Home;