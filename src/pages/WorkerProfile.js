import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'
import $ from 'jquery'


const WorkerProfile = () => {
    const [worker, setWorker] = useState({})
        const [loading, setLoading] = useState(true)


    let { workerId } = useParams();



    useEffect(() => {

        $.get(`https://unorganisedsectorbackbnd.herokuapp.com/API/workers/${workerId}`)
            .then(workerDetails => {

                console.log(workerDetails)
                setWorker(workerDetails)
                setLoading(false)

            })
            .catch(function (err) {
                console.log(err);
            })


    }, [])

    return (
        <div className="bg-gray-50 ">
            <Navbar />
            {!loading ?
                <div className="py-10 flex flex-row justify-center">

                    <div className="w-1/2 my-12">
                        <div className="bg-white p-10 mx-10 rounded sticky top-28">
                            <div className="flex items-center">

                                <p className="ml-2 mr-auto capitalize text-2xl border-2 max-w-60 rounded-full px-4 py-2 text-white bg-indigo-400">{worker.Work_Category}</p>

                                <h1 className="ml-auto mr-2 text-3xl capitalize">{`${worker.FirstName} ${worker.LastName}`}</h1>
                            </div>

                            <div className="text-xl m-4 mt-8">
                                <p className="text-2xl py-2">Services provided</p>
                                <p className="py-2">Repairing of home appliances, electricity fitting, automation, motors related issues also something and some other services</p>
                                <p className="py-2">{`Experience : ${worker.Experience}`}</p>
                                <p className="py-2">{`Contact : ${worker.Phone_no}`}</p>

                            </div>

                        </div>

                    </div>

                    <div className="w-1/3 m-4 ">

                        <div className="m-2 bg-white p-4 rounded px-8">
                            <h1 className="text-xl font-semibold text-gray-600 pb-4">Add a review</h1>
                            <textarea
                                required
                                type="text"
                                placeholder="Write a review"
                                className=" h-24 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                            // name="address"
                            // {...register("address")}
                            />

                            <div className="w-60 mt-2">
                                <button
                                    type="submit"
                                    className="font-semibold bg-green-400 text-white text-xl px-4 py-2 rounded">Submit</button>

                            </div>

                        </div>


                        <div className="m-2 bg-white p-4 px-8 rounded">
                            <h1 className="text-2xl">Reviews</h1>

                            {   worker && worker.Comments.map(review => {
                            return <div className=" p-2 m-2 rounded shadow">{review.Text}</div>
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