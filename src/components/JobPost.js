import React from 'react';

const JobPost = () => {
    return (
        <div className="bg-white  p-12 rounded m-2 md:w-8/12 shadow-sm">
            <div>
                <div className="flex flex-row">
                    <h2 className="text-indigo-400 text-2xl font-semibold">House keeper</h2>
                    <button className="mr-2 ml-auto bg-indigo-400 text-white px-4 py-2 rounded-md font-semibold">Apply Now</button>
                </div>

                <div className=" py-6 text-xl">
                    <p className="italic py-2">Description: it can be anything that describest the type and ammount of work deeded to be done for the job. the responsibilities can also be written</p>
                    <p><span className="font-semibold">Work category : </span> <span className="bg-green-50 px-4 rounded-3xl ">Houshold</span> </p>

                    <p><span className="font-semibold">Expeience level : </span> 1-2 years</p>
                    <p><span className="font-semibold">Salary Range : </span> 10000- 15000</p>
                    <p><span className="font-semibold">Vacancies : </span> 4</p>

                    <p><span className="font-semibold">City : </span> Pune</p>
                    <p><span className="font-semibold">Posted by : </span> Rutik wankhade</p>

                </div>

            </div>
        </div>
    );
}

export default JobPost;