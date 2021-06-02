import React, { useEffect , useState }from 'react';
import Navbar from '../components/Navbar'
import JobPost from '../components/JobPost'

const SearchJobs = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="py-10 md:px-20 flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl font-bold italic py-10 text-gray-500">Find work for you</h1>

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