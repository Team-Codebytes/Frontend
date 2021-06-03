import React from 'react';

const JobPost = ({ details }) => {
    return (
        <div className="bg-white  p-12 rounded m-2 md:w-8/12 shadow-sm">
            <div>
                <div className="flex flex-row">
                    <h2 className="text-indigo-400 text-2xl font-semibold">{ details.Job_Title}</h2>
                    <button className="mr-2 ml-auto bg-indigo-400 text-white px-4 py-2 rounded-md font-semibold">Apply Now</button>
                </div>

                <div className=" py-6 text-xl">
                    <p className="italic py-2">{details.Job_desc }</p>
                    <p><span className="font-semibold">Work category : </span> <span className="bg-green-50 px-4 rounded-3xl ">{ details.Work_Category}</span> </p>

                    <p><span className="font-semibold">Expeience level : </span> { details.Experience_Level}</p>
                    <p><span className="font-semibold">Salary Range : </span> { details.Salary_Range}</p>
                    <p><span className="font-semibold">Vacancies : </span> 4</p>

                    <p><span className="font-semibold">City : </span>{ details.City}</p>
                    <p><span className="font-semibold">Posted by : </span> { details.commonUser.Name}</p>

                </div>

            </div>
        </div>
    );
}

export default JobPost;