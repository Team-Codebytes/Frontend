import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import JobPost from '../components/JobPost'

import $ from 'jquery'


const SearchJobs = () => {

  const [allJobs, setAllJobs] = useState([]);
  // const [searchCity, setSearchCity] = useState("");
  //   const [searchJob, setSearchJob] = useState("");

  const [searchTerm, setSearchTerm] = useState("");






  const getAllJobs = () => {

    $.get('http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/postjob/')
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

      <div className="md:w-1/2 mx-auto px-4 my-6">

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search job by city or job title"
          className="m-2 p-4 px-8 border-2 bg-white rounded-full w-full md:text-2xl text-xl focus:outline-none focus:border-indigo-500"

        />

        {/* <input
          value={searchJob}
          onChange={(e) => setSearchJob(e.target.value)}
          type="text"
          placeholder="Search job by name"
          className="m-2 p-4 px-8 border-2 bg-white rounded-full w-full text-2xl focus:outline-none focus:border-indigo-500"
        
        /> */}
      </div>

      <div className="flex flex-row flex-wrap  justify-center items-center mx-auto">
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('')}>All</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('helper')}>Helper</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('labor')}>Labor</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('driver')}>Driver</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('household')}>Household</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('management')}>Management</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('security')}>Security</button>
        <button
          className="m-2 focus:bg-pink-400 hover:bg-indigo-400 bg-indigo-300 text-white  rounded-full p-2 px-6 focus:outline-none text-xl"
          onClick={() => setSearchTerm('Others')}>Others</button>


      </div>
      <div className="py-10 md:px-20 flex flex-col justify-center items-center">


        {
          allJobs
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.Job_Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              } else if (val.City.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              } else if (val.Work_Category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((job) => {
              return <JobPost details={job} />
            })

        }

      </div>
    </div>
  );
}

export default SearchJobs;