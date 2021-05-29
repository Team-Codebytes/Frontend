import React from 'react';
const JobInfoForm = () => {
    return (
        <div className="bg-gray-50 p-20 flex flex-row justify-center">
            <div className=" w-1/2 mx-auto bg-white rounded-md p-12 shadow">

                <h1 className="text-2xl font-semibold text-center mb-8">Job Details</h1>
                <div className="">
                    <input
                        type="text"
                        placeholder="Job title"
                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                 <textarea
                        type="text"
                        placeholder="Job Description"
                        className=" h-40 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                </div>

            </div>
            

                <div className=" w-1/3 mx-auto bg-white rounded-md p-12 shadow ">

                <h1 className="text-2xl font-semibold text-center mb-8">Employer's Details</h1>
                <div className="">
                    <input
                        type="text"
                        placeholder="First name"
                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                     <input
                        type="text"
                        placeholder="Last name"
                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />
 <input
                        type="text"
                        placeholder="Business/ Company  name"
                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                 <textarea
                        type="text"
                        placeholder="Job Description"
                        className=" h-40 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500" />

                </div>

</div>

        </div>
     );
}
 
export default JobInfoForm;