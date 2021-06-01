import React from 'react';
import Navbar from '../components/Navbar'
import loginImg from '../assets/login-img.jpg'

import { RadioGroup, RadioButton } from 'react-radio-buttons'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";



const Login = () => {
    return (
        <div className="bg-gray-50 ">
            <Navbar />
            <div className="py-20 ">
                <div className="w-8/12 bg-white p-20  shadow-md border-2  rounded-md m-auto">
                    <h1 className="text-3xl font-semibold text-gray-500 ">Welcome back !</h1>


                    <div className="flex flex-row justify-center">
                        <div className="md:w-1/2 mt-10 flex flex-col">

                            <div className="text-xl w-60 ml-2 py-2 font-medium"
                            >
                                <DropdownList
                                    defaultValue="Choose user type"
                                    data={["Common user", "Enterprise", "Worker"]}
                                />

                            </div>


                            <input
                                type="text"
                                placeholder="Phone No"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-80 text-xl focus:outline-none focus:border-indigo-500"
                                name="companyName"
                            // {...register("companyName")}

                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-80 text-xl focus:outline-none focus:border-indigo-500"
                                name="email"
                            // {...register("email")}
                            />

                            <button
                                type="submit"
                                className="m-2 w-32 font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Login</button>
                        </div>

                        <img src={loginImg} alt="login" className=" w-1/2" />

                    </div>


                </div>
            </div>

        </div>
    );
}

export default Login;