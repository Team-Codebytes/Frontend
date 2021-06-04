import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import $ from 'jquery'


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
                firstName: user.FirstName,
                lastName: user.LastName,
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



    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-10">
                <div className="p-10 mx-auto md:w-8/12 shadow-md rounded-md bg-white h-screen">


                    {/* <h1 className="text-3xl text-gray-800 text-center font-semibold">Update Profile</h1> */}

                    <div className="mt-20">
                        <img src={avatar} alt="avatar" className="mx-auto w-32 m-4 opacity-80" />
                        <h1 className="text-center text-4xl font-semibold py-2 capitalize">{`${currentUser.firstName}  ${currentUser.lastName}`}</h1>
                        <h1 className="text-center text-xl font-semibold bg-green-100 w-1/2 mx-auto p-2 m-2 rounded">{currentUser.email}</h1>

                        <h1 className="text-center text-2xl font-semibold bg-purple-400 text-white w-1/2 mx-auto p-2 m-2 rounded">{currentUser.userType}</h1>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserProfile;