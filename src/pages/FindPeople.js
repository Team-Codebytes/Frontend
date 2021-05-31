import React, { useEffect, useState } from 'react';
import Worker from '../components/Worker'

import { AvatarGenerator } from 'random-avatar-generator';


import $ from 'jquery'

const FindPeople = () => {

    const generator = new AvatarGenerator();

    let avatar = generator.generateRandomAvatar();

    const [allData, setAllData] = useState([])

    function getAllWorkers() {

        $.get('https://unorganisedsectorbackbnd.herokuapp.com/API/workers/')
            .then(workerData => {

                console.log(workerData)
                setAllData(workerData)

            }

            )
            .catch(function (err) {
                console.log(err);
            })

    }




    useEffect(() => {
        getAllWorkers();


    }, [])


    const renderWorkersList = () => {
        allData.map(element => {



            return (
                <div>
                    fgfg
                </div>
            )

            //  <div className=" w-1/4 p-4 bg-white m-6 shadow-md rounded-md text-center">
            //     <img src={avatar} alt="avatar" className="mx-auto w-24 m-4 opacity-80"/>
            //     <h1 className="text-2xl font-semibold text-center">House Keeper</h1>
            //     <h1 className="text-md font-semibold text-center">Rutik wankhade</h1>
            //     <p>Experience : 0-2 yrs</p>
            //                 <p>Contact : 1234567989</p>








        })
    }


    return (

        <div
            className="bg-gray-50 py-20 ">
            <div className="flex md:flex-row flex-col flex-wrap px-20 justify-center">

                {
                    allData.map((element) => {
                        return (
                                <Worker data={ element} key={element._id}/>

                             )

})
                }
                            </div>


        </div>
    );
}

export default FindPeople;