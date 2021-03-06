import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams, Link } from 'react-router-dom'
import $ from 'jquery'
import { useForm } from "react-hook-form";

import { AvatarGenerator } from 'random-avatar-generator';


const WorkerProfile = () => {

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();

    const { register, handleSubmit } = useForm();

    const [worker, setWorker] = useState({})
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState({})



    let { workerId } = useParams();



    useEffect(() => {

        $.get(`http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/workers/${workerId}`)
            .then(workerDetails => {

                console.log(workerDetails)
                setWorker(workerDetails)
                setLoading(false)

            })
            .catch(function (err) {
                console.log(err);
            })



    }, [workerId])


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user._id)
        setCurrentUser({
            id: user._id,
            name: user.FirstName + ' ' + user.LastName
        })
    }, [])



    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)

        let review = {
            id: currentUser.id,
            Name: currentUser.name,

            Text: data.review
        }

        $.post(`http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/workers/${workerId}/AddComment`, review)
            .then(window.location.reload()
            )
    }







    return (
        <div className="bg-gray-50 ">
            <Navbar />
            <Link to="/find-people">
                <button className="md:ml-40 mt-4 text-xl bg-gray-600 text-white mx-10 px-4 rounded-md">Back</button>
            </Link>
            {!loading ?
                <div className=" flex md:flex-row flex-col justify-center">

                    <div className="md:w-1/2 my-4">
                        <div className="bg-white md:p-10 md:mx-10 p-2 py-6 rounded sticky top-28">

                            <div className="flex  items-center">


                                <div className="flex flex-col">
                                    <img onError={(ev) => ev.target.src = avatar} src={`http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/uploads/${worker._id}/${worker.user_type}/Profile`}
                                        className="w-28 h-28 mx-auto rounded-full" alt="profile"
                                    />

                                    <h1 className="ml-auto mr-2 text-3xl capitalize">{`${worker.FirstName} ${worker.LastName}`}</h1>
                                </div>
                                <div className="mr-2 ml-auto outline-none capitalize text-2xl border-2 max-w-60 rounded-full px-4 py-2 text-white bg-indigo-400">{worker.Work_Category}</div>

                            </div>

                            <div className="text-xl m-4 mt-8">
                                <p className="text-2xl py-2">Services provided</p>
                                <p className="py-2">{worker.Services}</p>
                                <p className="py-2">{`Experience : ${worker.Experience}`}</p>
                                <p className="py-2">{`Contact : ${worker.Phone_no}`}</p>

                            </div>

                        </div>

                    </div>

                    <div className="md:w-1/3 md:m-4 ">
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="m-2 bg-white p-4 rounded px-8">
                                <h1 className="text-xl font-semibold text-gray-600 pb-4">Add a review</h1>
                                <textarea
                                    required
                                    type="text"
                                    placeholder="Write a review"
                                    className=" h-24 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="review"
                                    {...register("review")}
                                />

                                <div className="w-60 mt-2">
                                    <button
                                        type="submit"
                                        className="font-semibold bg-green-400 text-white text-xl px-4 py-2 rounded">Submit</button>

                                </div>

                            </div>
                        </form>


                        <div className="m-2 bg-white p-4 px-8 rounded">
                            <h1 className="text-2xl">{`${worker && worker.Comments.length} Reviews`}</h1>

                            {worker && worker.Comments.map(review => {
                                return (
                                    <div className=" p-4 m-2 border-2 border-gray-200 shadow-sm rounded text-xl">
                                        <div className="flex flex-row">
                                            {/* <img src={generator.generateRandomAvatar()} alt="avatar" className="m-1 h-6 w-6 opacity-80" /> */}
                                            <h1 className="font-medium text-base m-1">{review.Name}</h1>
                                        </div>
                                        <p className=" ">{review.Text}</p>
                                    </div>
                                )
                            })}
                        </div>


                    </div>

                    {/* <h1 className="text-4xl">{workerId}</h1> */}

                </div>
                : <div></div>
            }

        </div>
    );
}

export default WorkerProfile;