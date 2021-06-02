import React, { useEffect , useState }from 'react';
import Navbar from '../components/Navbar'
import JobPost from '../components/JobPost'

import $ from 'jquery'


const SearchJobs = () => {

  const [allJobs, setAllJobs] = useState([]);



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
    

  
},[])

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="py-10 md:px-20 flex flex-col mr-4 ml-auto">

        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />

      </div>
    </div>
  );
}

export default SearchJobs;