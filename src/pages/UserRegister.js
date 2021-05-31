import React  from 'react';
import { createUser } from '../utils/api'
import { useForm } from "react-hook-form";

const UserRegister = () => {

    const { register,  handleSubmit } = useForm();

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)

        let newUser = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Email_id: data.email,
            Password: data.password,
            Address: data.address,
            State: data.state,
            City: data.city,
            Pincode: data.pincode,
            Phone_no: data.phoneNo,
            Aadhar_Card: data.aadharNo

        }

        createUser(newUser)

    }



    return (
        <div className="bg-red-200 py-10">

            <div className=" mx-auto bg-white rounded-md md:p-12 p-6 shadow  md:w-2/3 ">
                <h1 className="text-2xl font-semibold text-center mb-8">Register as user</h1>
                {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex md:flex-row flex-col justify-center">

                        <div className="md:w-1/2 m-6">

                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="firstName"
                                    {...register("firstName")}

                                />

                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="ml-2 my-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="lastName"
                                    {...register("lastName")}
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="email"
                                {...register("email")}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="password"
                                {...register("password")}
                            />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="phoneNo"
                                {...register("phoneNo")}
                            />

                            <input
                                type="text"
                                placeholder="Aadhar Number"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="aadharNo"
                                {...register("aadharNo")}
                            />
                        </div>


                        <div className="md:w-1/2 m-6">

                            <textarea
                                type="text"
                                placeholder="Address"
                                className=" h-28 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="address"
                                {...register("address")}
                            />

                            <input
                                type="text"
                                placeholder="City"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="city"
                                {...register("city")}
                            />

                            <input
                                type="text"
                                placeholder="Pincode"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="pincode"
                                {...register("pincode")}
                            />

                            <input
                                type="text"
                                placeholder="State"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="state"
                                {...register("state")}
                            />

                            <div className="w-60 md:ml-40 mt-4">
                                <button
                                    type="submit"
                                    className="font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Register</button>

                            </div>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default UserRegister;