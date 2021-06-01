import React  from 'react';
import { useForm } from "react-hook-form";
import $ from 'jquery'
import { useHistory } from 'react-router-dom'




const EnterpriseRegister = () => {

    const { register, handleSubmit } = useForm();
     const history = useHistory();

    async function createEnterpriseUser(user) {

        let result = await $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/enterpriceuser/create', user)
      
        localStorage.setItem('user', JSON.stringify(result))
        history.push('/find-people')
    }

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)

        let newUser = {
            FirstName: data.companyName,
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
        <div className="bg-indigo-200 py-10">

            <div className=" mx-auto bg-white rounded-md md:p-12 p-6 shadow  md:w-2/3 ">
                <h1 className="text-2xl font-semibold text-center mb-8">Register as an Enterprise</h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex md:flex-row flex-col justify-center">
                        <div className="md:w-1/2 m-6">

                                <input
                                    type="text"
                                    placeholder="Company / Organization"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="companyName"
                                    {...register("companyName")}

                                />

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
                                placeholder="Contact number"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="phoneNo"
                                {...register("phoneNo")}
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

export default EnterpriseRegister;