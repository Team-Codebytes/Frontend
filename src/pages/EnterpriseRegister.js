import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce';

import Navbar from '../components/Navbar'
import loader from '../assets/loader.svg'



const EnterpriseRegister = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')



    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/')
        }
    })

    async function createEnterpriseUser(user) {
        setLoading(true)

        try {

            let result = await $.post('http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/enterpriceuser/create', user)
            if (result.message) {
                throw new Error(result.message)
            }
            localStorage.setItem('user', JSON.stringify(result))
            setLoading(false)

            history.push('/')
        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)
        }
    }

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)

        let newUser = {
            CompanyName: data.companyName,
            Email_id: data.email,
            Password: data.password,
            Address: data.address,
            State: data.state,
            City: data.city,
            Pincode: data.pincode,
            Phone_no: data.phoneNo,
        }

        createEnterpriseUser(newUser)

    }



    return (
        <div className="bg-indigo-200 ">
            <Navbar />

            <div className="md:py-10 ">
                <Bounce right>


                <div className="mx-auto bg-white rounded-md md:p-12 p-6 shadow  md:w-2/3 ">
                    <h1 className="text-2xl font-semibold text-center mb-8">Register as an Enterprise</h1>
                    {error ?
                        <div className="bg-red-50 text-center text-red-400 m-4 p-2">{error.message}</div>
                        : <div></div>
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex md:flex-row flex-col justify-center">
                            <div className="md:w-1/2 m-6">

                                <input
                                    required
                                    type="text"
                                    placeholder="Company / Organization"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="companyName"
                                    {...register("companyName")}

                                />

                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="email"
                                    {...register("email")}
                                />

                                <input
                                    required
                                    type="password"
                                    placeholder="Password"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="password"
                                    {...register("password")}
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Contact number"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="phoneNo"
                                    {...register("phoneNo")}
                                />


                            </div>


                            <div className="md:w-1/2 m-6">

                                <textarea
                                    required
                                    type="text"
                                    placeholder="Address"
                                    className=" h-28 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="address"
                                    {...register("address")}
                                />

                                <input
                                    required
                                    type="text"
                                    placeholder="City"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="city"
                                    {...register("city")}
                                />

                                <input
                                    required
                                    type="text"
                                    placeholder="Pincode"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="pincode"
                                    {...register("pincode")}
                                />

                                <input
                                    required
                                    type="text"
                                    placeholder="State"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="state"
                                    {...register("state")}
                                />

                                <div className="w-60 md:ml-40 mt-4">
                                    <button
                                        type="submit"
                                        className="flex font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Register

                                        {loading ?
                                            <img src={loader} alt="loading..." className=" text-center w-8 mx-4 opacity-70 animate-spin  " />
                                            : <div></div>
                                        }
                                    </button>

                                </div>

                            </div>

                        </div>

                    </form>
                    </div>
                    </Bounce>
            </div>

        </div>
    );
}

export default EnterpriseRegister;