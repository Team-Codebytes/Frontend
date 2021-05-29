import React from 'react';
import { Link } from 'react-router-dom';

import peopleImg1 from '../assets/people1.jpg'
import peopleImg2 from '../assets/people2.jpg'
import searchIcon from '../assets/bx-search.svg'
import commentIcon from '../assets/bx-comment.svg'


const Home = () => {
    return (
        <div className="bg-gray-50 ">

            <div className="pt-28 flex md:flex-row flex-col justify-center">
                <div className="pt-4">
                    <h1 className=" text-center text-3xl md:text-4xl font-bold">Find people for your work.</h1>
                    <h1 className="   text-center text-3xl md:text-4xl font-bold">find work for you.</h1>
                    <h1 className=" py-4 text-center font-semibold italic ">A centralized platform for the unorganized sector</h1>
                </div>

                <div className="flex flex-row justify-center md:py-2 py-10 md:px-20">
                    <div>
                        <img src={commentIcon} alt="illustration" className="w-20 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                        <Link to="/job-info-form">

                            <button className="bg-purple-400 text-xl m-4 font-bold shadow rounded-md px-8 py-4 text-white">Post a job</button>
                        </Link>
                    </div>

                    <div>
                        <img src={searchIcon} alt="illustration" className="w-20 h-auto bg-white rounded-full p-4 shadow mx-auto" />
                        <Link to="/search-jobs">
                            <button className="bg-pink-400 text-xl m-4 rounded-md font-bold shadow px-8 py-4 text-white">Find a job</button>
                        </Link>
                    </div>

                </div>

            </div>

            <div className="flex flex-row mt-20">
                <img src={peopleImg1} alt="illustration" className="w-1/2 opacity-70	" />
                <img src={peopleImg2} alt="illustration" className="w-1/2 opacity-70	" />
            </div>



        </div>
    );
}

export default Home;