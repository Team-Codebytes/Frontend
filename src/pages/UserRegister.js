import React from 'react';
import { createUser } from '../utils/api'


const UserRegister = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('donne')

        let data = {
            FirstName: 'rutik',
            LastName: 'rutik',
            Email_id: 'rutik',
            Password: 'rutik',
            Address: 'rutik',
            State: 'rutik',
            City: 'rutik',
            Pincode: 'rutik',
            Phone_no: 'rutik',
            Aadhar_Card: 'rutik'
            
            
    
}

        // createUser(data);

         createUser({
            FirstName: 'rutik',
            LastName: 'rutik',
            Email_id: 'rutik',
            Password: 'rutik',
            Address: 'rutik',
            State: 'rutik',
            City: 'rutik',
            Pincode: 'rutik',
            Phone_no: 'rutik',
            Aadhar_Card: 'rutik'
            
            
    
})
  
}



    return (
        <div className="bg-gray-50 py-20">

            <div className=" mx-auto bg-white rounded-md p-12 shadow w-2/3 ">
                <h1 className="text-2xl font-semibold text-center mb-8">Register as user</h1>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex flex-row justify-center">

                        <div className="w-1/2 m-6">

                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="ml-2 my-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                            <input
                                type="password"
                                placeholder="Password"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />
                        </div>


                        <div className="w-1/2 m-6">

                            <textarea
                                type="text"
                                placeholder="Address"
                                className=" h-28 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                            <input
                                type="text"
                                placeholder="City"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />
                            <input
                                type="text"
                                placeholder="State"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                            <div className="w-60 mr-10 ml-auto">
                                <button
                                    type="submit"
                                    className="bg-indigo-400 text-white text-xl px-4 py-2 rounded">Register</button>

                            </div>

                        </div>









                    </div>





                </form>



            </div>






        </div>
    );
}

export default UserRegister;