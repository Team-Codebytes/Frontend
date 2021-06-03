import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'
import $ from 'jquery'


const WorkerProfile = () => {

    // let workerId =props.match.params.workerId
    let { workerId } = useParams();

     const getWorkerDetails = () => {

        $.get(`https://unorganisedsectorbackbnd.herokuapp.com/API/workers/${workerId}`)
            .then(workerDetails => {

                console.log(workerDetails)
                // setAllData(workerDetails)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    useEffect(() => {
        getWorkerDetails()


        
    })

    return (
        <div className="bg-gray-50 ">
            <Navbar />
            <div className="py-20">
            <h1 className="text-4xl">{workerId}</h1>

            </div>

        </div>
    );
}

export default WorkerProfile;