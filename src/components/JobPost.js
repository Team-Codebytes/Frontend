import React from 'react';

const JobPost = () => {
    return (
        <div className="bg-white p-8 rounded m-4 md:w-2/3 shadow-sm">
            <div>
                <div className="flex flex-row">
                    <h2 className="text-indigo-400 text-2xl font-semibold">House keeper</h2>
                    <button className="mr-2 ml-auto bg-indigo-400 text-white px-4 py-2 rounded-md font-semibold">Apply Now</button>
                </div>
                <p>Location : Pune</p>
                <p>Category : Housekeeping </p>
                <p>posted by Rutik Wankhade on 20 may 2021</p>
            </div>
        </div>
    );
}

export default JobPost;