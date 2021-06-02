import React, { useState } from 'react';
import { useForm } from "react-hook-form";


import Navbar from '../components/Navbar'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

import banner from '../assets/banner.jpg'



const JobInfoForm = () => {

    const [workCategory, setWorkCategory] = useState('')
    const [experienceLevel, setExperienceLevel] = useState('')



    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className=" ">
                <div className=" bg-gray-50 rounded-md  shadow flex flex-row-reverse justify-center">

                    <div className="bg-white border-2 p-12 w-1/2 mt-10">

                        <h1 className="text-2xl font-semibold text-center mb-8">Post a new job</h1>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Job title"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                            <textarea
                                type="text"
                                placeholder="Job Description"
                                className=" h-28 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />



                            <div className="flex">
                                <div className="text-xl md:w-1/2  ml-2 py-2 font-medium"
                                >
                                    <DropdownList
                                        defaultValue="Work Category"
                                        data={["Helper", "Labour", "Driver", "Carpenter", "Cook", "Electrician"]}
                                        onChange={value => setWorkCategory(value)}

                                    />

                                </div>

                                <div className="text-xl md:w-1/2  ml-2 py-2 font-medium">

                                    <DropdownList
                                        defaultValue="Experience level"
                                        data={["Does not matter", "Fresher (Unskilled)", "0-1 years", "2-5 years", "5-7 years", "7-10 years", "10 + years"]}
                                        onChange={value => setExperienceLevel(value)}
                                    />
                                </div>


                            </div>

                            <div className="flex flex-row">
                                <input
                                    required
                                    type="number"
                                    placeholder="No. of vacancies"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full  text-xl focus:outline-none focus:border-indigo-500"
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Salary range"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                />


                            </div>

                            <div className="flex flex-row">
                                <textarea
                                    type="text"
                                    placeholder="Address"
                                    className="h-28 w-1/2 m-2 p-2 border-2 bg-gray-50 rounded text-xl focus:outline-none focus:border-indigo-500" />

                                <div className="w-1/2">
                                    <input
                                        required
                                        type="text"
                                        placeholder="City"
                                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="State"
                                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="w-20 flex mx-auto mt-2">
                                <button
                                    type="submit"
                                    className=" mr-2 font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Submit</button>

                            </div>



                        </div>


                    </div>

                    <div className=" flex flex-col justify-center text-left w-96 mx-20 mt-10">
                        <h1 className="text-3xl font-bold text-indigo-400">Post the job based on your requirements</h1>
                        <h1 className="text-3xl font-semibold py-4">and hire best people for your work</h1>

                        <img src={banner} className="rounded-full w-80 h-80 m-10 " />

                    </div>


                </div>

            </div>
        </div>
    );
}

export default JobInfoForm;