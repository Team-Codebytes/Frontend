import React, { useEffect, useState } from 'react';
import Worker from '../components/Worker'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import $ from 'jquery'

import Navbar from '../components/Navbar'


const FindPeople = () => {

    const [allData, setAllData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


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





    //     {
    //   data
    //     .filter((val) => {
    //       if (searchTerm === "") {
    //         return val;
    //       } else if (
    //         val.title.toLowerCase().includes(searchTerm.toLowerCase())
    //       ) {
    //         return val;
    //       }
    //     })
    //     .map((post, key) => {
    //       return ( 
    //         <p className="blog" key={key}>
    //               {post.title}
    //         </p>
    //       );
    //     })
    //    }
    // }


    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="py-10 ">
                <div className="md:w-1/2 mx-auto px-2 my-6">

                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="What type of worker you want?"
                        className="m-2 p-4 px-8 border-2 bg-white rounded-full w-full md:text-2xl text-xl focus:outline-none focus:border-indigo-500"
                    // name="jobTitle"
                    // {...register("jobTitle")}
                    />
                </div>
                <div className="flex md:flex-row flex-col flex-wrap md:px-10 justify-center">

                    {/* {
                        allData.map((element) => {
                            return (
                                <Link to={`/workers/${element._id}`}>
                                    <Worker data={element} key={element._id} />
                                </Link>

                            )
                        })
                    } */}

                    <div className="flex md:flex-row flex-col flex-wrap md:px-10 justify-center">
                        {

                            allData
                                .filter((val) => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (val.Work_Category.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .map((element) => {
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
        </div>
    );
}

export default FindPeople;