import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import $ from 'jquery'
import JobPost from '../components/JobPost'


import { AvatarGenerator } from 'random-avatar-generator';


const UserProfile = () => {

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();
    const [currentUser, setCurrentUser] = useState('')
    const [allJobs, setAllJobs] = useState([]);



    useEffect(() => {

        if (JSON.parse(localStorage.getItem('user') !== null)) {


            let user = JSON.parse(localStorage.getItem('user'))
            // console.log(user._id)
            setCurrentUser({
                id: user._id,
                firstName: user.FirstName || user.CompanyName,
                lastName: user.LastName || ' ',
                email: user.Email_id,
                userType: user.user_type

            })

        }
    }, [])

    const getAllJobs = () => {

        $.get('https://unorganisedsectorbackbnd.herokuapp.com/API/postjob/')
            .then(jobsList => {

                console.log(jobsList)
                setAllJobs(jobsList)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    useEffect(() => {

        getAllJobs();
        console.log(allJobs)



    }, [allJobs])


    const deletePost = (id) => {

        fetch(`https://unorganisedsectorbackbnd.herokuapp.com/API/postjob/${id}/delete`, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }



    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-10">
                <div className="p-10 mx-auto md:w-8/12 shadow-md rounded-md bg-white ">



                    <div className="mt-20">
                        <img src={avatar} alt="avatar" className="mx-auto w-32 m-4 opacity-80" />
                        <h1 className="text-center text-4xl font-semibold py-2 capitalize">{`${currentUser.firstName}  ${currentUser.lastName}`}</h1>
                        <h1 className="text-center text-xl font-semibold bg-green-100 w-1/2 mx-auto p-2 m-2 rounded">{currentUser.email}</h1>

                        <h1 className="text-center text-2xl font-semibold bg-purple-400 text-white w-1/2 mx-auto p-2 m-2 rounded">{currentUser.userType}</h1>

                    </div>


                    <div className="flex flex-col justify-center items-center my-20">
                        <h1 className="text-2xl font-semibold text-center mb-4">Jobs posted by me</h1>
                        {

                            allJobs
                                .filter((val) => {
                                    if (val.commonUser.id === currentUser.id) {
                                        return val;
                                    }
                                })
                                .map((job) => {
                                    return (
                                        <div className=" w-8/12 border-2 border-gray-200 p-4 rounded m-2 ">
                                            <div className="flex mb-2">

                                                <h1 className="text-indigo-400 text-xl font-semibold">{job.Job_Title}</h1>
                                                <button
                                                    onClick={() => deletePost(job._id)}
                                                    className="bg-red-400 text-white font-semibold px-2 ml-auto mr-2 rounded">Delete</button>
                                            </div>
                                            <p>Experience Level: {job.Experience_Level}</p>
                                            <p>Salary: {job.Salary_Range}</p>


                                        </div>
                                    )
                                })



                        }

                    </div>

                </div>




            </div>
        </div>
    );
}

export default UserProfile;