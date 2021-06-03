import React, { useEffect, useState } from 'react';
import Worker from '../components/Worker'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
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
                <div className="w-1/4 mx-auto my-4">
                    {/* <Link to="/job-info-form">
                    <span className=" mx-auto text-xl font-semibold bg-purple-400 text-white rounded p-2 px-4">+ Post a Job</span>
                    </Link> */}
                </div>
                <div className="flex md:flex-row flex-col flex-wrap px-10 justify-center">

                    {
                        allData.map((element) => {
                            return (
                                <Link to={`/workers/${element._id}`}>
                                    <Worker data={element} key={element._id} />
                                </Link>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FindPeople;