import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import $ from 'jquery'
import { useForm } from "react-hook-form";
import editIcon from '../assets/edit.svg'

// import JobPost from '../components/JobPost'


import { AvatarGenerator } from 'random-avatar-generator';


const UserProfile = () => {

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();
    const [currentUser, setCurrentUser] = useState('')
    const [allJobs, setAllJobs] = useState([]);
    const [showEdit, setShowEdit] = useState(false)
    const [photo, setPhoto] = useState()



    const { register, handleSubmit } = useForm();


    useEffect(() => {

        if (JSON.parse(localStorage.getItem('user') !== null)) {


            let user = JSON.parse(localStorage.getItem('user'))
            // console.log(user._id)
            setCurrentUser({
                id: user._id,
                firstName: user.FirstName || user.CompanyName,
                lastName: user.LastName || ' ',
                email: user.Email_id,
                userType: user.user_type,

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
    }, [])


    const deletePost = (id) => {

        fetch(`https://unorganisedsectorbackbnd.herokuapp.com/API/postjob/${id}/delete`, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }


    const onChangeHandler = (event) => {

        console.log(event.target.files[0])
        setPhoto(event.target.files[0])

    }




    async function updateProfile(data) {

        var form = new FormData();
        form.append('file', photo)
        form.append("user_type", currentUser.userType);
        form.append("image_cat", "Profile");
        console.log(form)

        await $.ajax({
            type: "POST",
            url: `https://unorganisedsectorbackbnd.herokuapp.com/API/uploads/${currentUser.id}`,
            data: form,
            processData: false,
            contentType: false,

        })
            .then(res => {
                console.log(res)
                window.location.reload()

            })
    }

    const onSubmit = (data) => {

        console.log(data);
        updateProfile(data);


    };






    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-10">
                <div className="p-10 mx-auto md:w-8/12 shadow-md rounded-md bg-white ">


                    <img src={editIcon}
                        onClick={() => setShowEdit(!showEdit)}
                        alt="edit"
                        className="ml-auto mr-2 bg-gray-50 p-2 rounded-full hover:bg-green-50 cursor-pointer" />
                    <div className="mt-10">
                        <img onError={(ev) => ev.target.src = avatar} src={`https://unorganisedsectorbackbnd.herokuapp.com/API/uploads/${currentUser.id}/${currentUser.userType}/Profile`} alt="avatar" className="mx-auto w-32 h-32 m-4 opacity-80 rounded-full" />

                        {showEdit ?

                            <form onSubmit={handleSubmit(onSubmit)}
                                className="flex py-6 items-center p-4 border-2 shadow-sm my-4 w-1/2 mx-auto rounded">
                                <input type="file" name="file"
                                    onChange={onChangeHandler}
                                />
                                <button className="bg-indigo-400 text-white p-1 px-2 rounded">Submit</button>
                            </form>
                            : <div></div>
                        }

                        <h1 className="text-center text-4xl font-semibold py-2 capitalize">{`${currentUser.firstName}  ${currentUser.lastName}`}</h1>
                        <h1 className="text-center text-xl font-semibold bg-green-100 md:w-1/2 mx-auto p-2 m-2 rounded">{currentUser.email}</h1>

                        <h1 className="text-center text-2xl font-semibold bg-purple-400 text-white md:w-1/2 mx-auto p-2 m-2 rounded">{currentUser.userType}</h1>

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