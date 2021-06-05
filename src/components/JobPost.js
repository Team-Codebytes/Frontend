import React from 'react';
import callIcon from '../assets/call.svg'

const JobPost = ({ details }) => {
    return (
        <div className="bg-white  p-12 rounded m-2 md:w-8/12 shadow-sm">
            <div>
                <div className="flex flex-row">
                    <h2 className="capitalize text-indigo-400 text-2xl font-semibold">{details.Job_Title}</h2>
                    <button className="flex mr-2 ml-auto bg-green-400 text-white px-4 py-2 rounded-md font-semibold">
                        <img src={callIcon} className="h-6 w-6 mr-2" />
                        {details.commonUser.Phone_no}</button>
                </div>

                <div className=" py-6 md:text-xl text-md">
                    <p className="italic py-2 md:text-xl text-sm text-gray-500">{details.Job_desc}</p>
                    <p><span className="font-semibold">Work category : </span> <span className="bg-green-50 px-4 rounded-3xl ">{details.Work_Category}</span> </p>

                    <p><span className="font-semibold">Expeience level : </span> {details.Experience_Level}</p>
                    <p><span className="font-semibold">Salary Range : </span> {details.Salary_Range}</p>
                    <p><span className="font-semibold">Vacancies : </span> {details.Vacancies}</p>

                    <p><span className="font-semibold">City : </span>{details.City}</p>
                    <p><span className="font-semibold">Posted by : </span> {details.commonUser.Name}</p>

                </div>

            </div>
        </div>
    );
}

export default JobPost;