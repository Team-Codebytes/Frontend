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
    const [userType, setUserType] = useState('')


    useEffect(() => {

        if (localStorage.getItem('user')) {
            setLoggedIn(true)
            let user = JSON.parse(localStorage.getItem('user'))
            // console.log(user._id)
            setUserType(
                user.user_type)

        } else {
            setLoggedIn(false)
        }


    }, [])

    return (
        <div className="bg-gray-50 ">
            <Navbar />

            <div className="pt-28 flex flex-col-reverse justify-center">
                <div className="pt-4 px-2">
                    <h1 className=" text-center text-3xl md:text-5xl py-2 text-gray-700 font-bold">Find people for your work.</h1>
                    <h1 className="   text-center text-3xl md:text-5xl py-2 text-gray-700 font-bold">find work for you.</h1>
                    <h1 className=" py-4 text-center md:text-xl font-semibold italic ">A centralized platform for the unorganized sector</h1>
                </div>

                {

                    loggedIn ?

                        <div className="flex flex-row flex-wrap justify-center md:py-2 py-6 md:px-20">


                            {userType !== 'worker' ?
                                <div className="flex flex-row flex-wrap justify-center md:py-2 py-6 md:px-20">
                                    <div className="mx-4 flex flex-col items-center">
                                        <img src={commentIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                        <Link to="/job-info-form">

                                            <button className=" mx-auto bg-purple-400 hover:bg-purple-500 text-xl m-4 font-bold shadow rounded-md px-8 py-4 text-white">Post a job</button>
                                        </Link>
                                    </div>

                                    <div className="mx-4 flex flex-col items-center">
                                        <img src={searchIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                        <Link to="/search-jobs">
                                            <button className="bg-pink-400 hover:bg-pink-500 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find a job</button>
                                        </Link>
                                    </div>


                                    <div className="mx-4  flex flex-col items-center">
                                        <img src={peopleIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                        <Link to="/find-people">
                                            <button className="bg-gray-600 hover:bg-gray-700 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find workers</button>
                                        </Link>
                                    </div>
                                </div>
                                :
                                 <div className="flex flex-row flex-wrap justify-center md:py-2 py-6 md:px-20">
           

                                    <div className="mx-4 flex flex-col items-center">
                                        <img src={searchIcon} alt="illustration" className="w-24 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                                        <Link to="/search-jobs">
                                            <button className="bg-pink-400 hover:bg-pink-500 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find a job</button>
                                        </Link>
                                    </div>


                                    
                                </div>
                            }





                        </div>
                        :
                        <div></div>

                }

            </div>

            <div className="flex flex-row mt-20">
                <img src={peopleImg1} alt="illustration" className="w-1/2 opacity-70	" />
                <img src={peopleImg2} alt="illustration" className="w-1/2 opacity-70	" />
            </div>


            <div className="bg-purple-300 md:px-20 pt-10">

                <div className="w-8/12 px-12 mx-auto  md:rounded-full rounded-md mb-10 text-white text-center py-10 bg-gray-600">
                    <h1 className="md:text-3xl font-semibold ">According to the report of Economic Survey released in 2019, the unorganized sector accounts for 93% of the total workforce of the country.</h1>

                </div>


                <div className="bg-white p-10 rounded-2xl ">

                    <div className="md:w-8/12 mx-auto flex md:flex-row flex-col justify-center items-center py-10">

                        <img src={groupImg} alt="people" className="w-1/2  opacity-60" />
                        <div className="md:w-1/2 m-10">
                            <h1 className="md:text-3xl text-xl font-semibold md:text-left text-center">Get access to the skilled workers and hire staff for the job</h1>
                        </div>

                    </div>


                    <div className="md:w-8/12 mx-auto flex md:flex-row-reverse flex-col justify-center items-center py-10">

                        <img src={workersImg} alt="workers" className="w-1/2 opacity-60" />
                        <div className="md:w-1/2 m-10">
                            <h1 className="md:text-3xl text-xl font-semibold md:text-left text-center">Find Jobs based on your skills and experience</h1>
                        </div>

                    </div>


                    <div className="md:w-8/12 mx-auto flex md:flex-row flex-col justify-center items-center py-10">

                        <img src={banner} alt="post" className="w-1/3 rounded-full opacity-60" />
                        <div className="md:w-1/2 m-20">
                            <h1 className="md:text-3xl text-xl font-semibold md:text-left text-center">Post jobs on the platform based on your requirements</h1>
                        </div>

                    </div>

                    {!loggedIn ?
                        <Link to="/choose-user-type">

                            <div className="w-full border-b-4 flex items-center mx-auto py-10 bg-gray-50">
                                <button className="focus:outline-none md:w-80 mx-auto bg-purple-400 hover:bg-green-400 md:text-3xl  text-xl m-4 font-bold shadow rounded-full px-8 py-4 text-white">Register Now</button>
                            </div>
                        </Link>
                        :
                        <div></div>

                    }



                    <div className=" p-10 flex md:flex-row flex-col">
                        <div className="md:w-8/12">
                        <h1 className="text-2xl font-semibold mb-2">About Us</h1>
                            <p className="text-xl">Built by <span className="text-indigo-400 font-bold">Team Codebytes</span>, Final year students of Computer Engineering, Sinhgad Institute of Technology, Lonavala.</p>
                        </div>
                        
                        <div className="md:mt-0 mt-4 text-md">
                            <h1 className="font-bold text-xl">Team</h1>
                            <p>Vishwajeet Gade</p>
                            <p>Rutik Wankhade</p>
                            <p>Tushar Epatil</p>
                            <p>Rohit jadhav</p>

                        </div>
</div>

                </div>
            </div>



        </div>
    );
}

export default Home;