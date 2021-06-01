import React, { useEffect, useState } from 'react';
import Worker from '../components/Worker'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import Navbar from '../components/Navbar'


const FindPeople = () => {

    const [allData, setAllData] = useState([])

    const getAllWorkers = () => {

        $.get('https://unorganisedsectorbackbnd.herokuapp.com/API/workers/')
            .then(workerData => {

                console.log(workerData)
                setAllData(workerData)
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    useEffect(() => {
        getAllWorkers();

    }, [])


    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-20 ">
                <Link to="/job-info-form">
                    <span className=" mr-auto ml-20 text-xl font-semibold bg-purple-400 text-white rounded p-2 px-4">+ Post a Job</span>
                </Link>
                <div className="flex md:flex-row flex-col flex-wrap px-20 justify-center">

                    {
                        allData.map((element) => {
                            return (
                                <Worker data={element} key={element._id} />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FindPeople;