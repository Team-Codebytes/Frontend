import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'
import $ from 'jquery'


const WorkerProfile = () => {
    const [worker, setWorker] = useState({})

    let { workerId } = useParams();



    useEffect(() => {

        $.get(`https://unorganisedsectorbackbnd.herokuapp.com/API/workers/${workerId}`)
            .then(workerDetails => {

                console.log(workerDetails)
                setWorker(workerDetails)

            })
            .catch(function (err) {
                console.log(err);
            })


    },[])

    return (
        <div className="bg-gray-50 ">
            <Navbar />
            <div className="py-10 ">
                <div className="w-1/2 bg-white p-10 m-10 rounded">
                    <div className="flex items-center">

                        <p className="ml-2 mr-auto capitalize text-2xl border-2 max-w-min rounded-full px-4 py-2 text-white bg-indigo-400">{worker.Work_Category}</p>

                        <h1 className="ml-auto mr-2 text-3xl capitalize">{`${worker.FirstName} ${worker.LastName}`}</h1>
                    </div>

                    <div className="text-xl m-4 mt-8">
                        <p className="text-2xl py-2">Services provided</p>
                        <p className="py-2">Repairing of home appliances, electricity fitting, automation, motors related issues also something and some other services</p>
                        <p className="py-2">{`Experience : ${worker.Experience}`}</p>
                        <p className="py-2">{`Contact : ${worker.Phone_no}`}</p>

                    </div>

                </div>
                {/* <h1 className="text-4xl">{workerId}</h1> */}

            </div>

        </div>
    );
}

export default WorkerProfile;