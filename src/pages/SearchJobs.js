import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import JobPost from '../components/JobPost'

import $ from 'jquery'


const SearchJobs = () => {

  const [allJobs, setAllJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");




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
    console.log(allJobs)



  }, [allJobs])

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="w-1/2 mx-auto my-6">

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search job by name or city"
          className="m-2 p-4 px-8 border-2 bg-white rounded-full w-full text-2xl focus:outline-none focus:border-indigo-500"
        
        />
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