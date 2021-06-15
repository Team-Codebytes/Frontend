import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce';
import loader from '../assets/loader.svg'


import Navbar from '../components/Navbar'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import banner from '../assets/banner.jpg'


const JobInfoForm = () => {


    const [currentUser, setCurrentUser] = useState('')
        const [loading, setLoading] = useState(false)


    const [workCategory, setWorkCategory] = useState('')
    const [experienceLevel, setExperienceLevel] = useState('')
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user._id)
        setCurrentUser({
            id: user._id,
            name: `${user.FirstName || user.CompanyName}  ${user.LastName || ''}`,
            phoneNo: user.Phone_no

        })
    }, [])


    async function postJob(data) {
                setLoading(true)


        let jobDetails = {

            Job_Title: data.jobTitle,
            Job_desc: data.description,
            Work_Category: workCategory,
            Experience_Level: experienceLevel,
            Vacancies: data.vacancies,
            Salary_Range: data.salary,
            Address: data.address,
            City: data.city,
            State: data.State,
            commonUser: {
                id: currentUser.id,
                Name: currentUser.name ,
                Phone_no: currentUser.phoneNo

            }
        }

        let result = await $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/postjob/create', jobDetails)
        console.log(result)
       setLoading(false)

        // localStorage.setItem('user', JSON.stringify(result))
        history.push('/post-success')

    }

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)
        postJob(data);

    }




    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className=" ">
                <div className=" bg-gray-50 rounded-md  shadow flex md:flex-row-reverse flex-col-reverse justify-center">
<Bounce bottom>
                    <div className="bg-white border-2 md:p-12 p-6 md:w-1/2 mt-10">

                        <h1 className="text-2xl font-semibold text-center mb-8">Post a new job</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Job title"
                                className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="jobTitle"
                                {...register("jobTitle")}
                            />

                            <textarea
                                type="text"
                                placeholder="Job Description"
                                className=" h-28 m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                name="description"
                                {...register("description")}
                            />



                            <div className=" flex md:flex-row flex-col">
                                <div className="text-xl md:w-1/2  ml-2 py-2 font-medium"
                                >
                                    <DropdownList
                                        defaultValue="Work Category"
                                        data={["Helper", "Labour", "Driver", "Carpenter", "Cook", "Electrician","Management", "Assistant", "Household","Mechanic","Security","Other"]}
                                        onChange={value => setWorkCategory(value)}

                                    />

                                </div>

                                <div className="text-xl md:w-1/2  ml-2 py-2 font-medium">

                                    <DropdownList
                                        defaultValue="Experience level"
                                        data={["Does not matter", "Fresher (Unskilled)", "0-1 years", "2-5 years", "5-7 years", "7-10 years", "10 + years"]}
                                        onChange={value => setExperienceLevel(value)}
                                    />
                                </div>


                            </div>

                            <div className="flex md:flex-row flex-col">
                                <input
                                    required
                                    type="number"
                                    placeholder="No. of vacancies"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full  text-xl focus:outline-none focus:border-indigo-500"
                                    name="vacancies"
                                    {...register("vacancies")}
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Salary range"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                    name="salary"
                                    {...register("salary")}
                                />


                            </div>

                            <div className="flex md:flex-row flex-col">
                                <textarea
                                    type="text"
                                    placeholder="Address"
                                    className="h-28 md:w-1/2 m-2 p-2 border-2 bg-gray-50 rounded text-xl focus:outline-none focus:border-indigo-500"
                                    name="address"
                                    {...register("address")}
                                />

                                <div className="md:w-1/2">
                                    <input
                                        required
                                        type="text"
                                        placeholder="City"
                                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                        name="city"
                                        {...register("city")}
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="State"
                                        className="m-2 p-2 border-2 bg-gray-50 rounded w-full text-xl focus:outline-none focus:border-indigo-500"
                                        name="state"
                                        {...register("state")}
                                    />
                                </div>
                            </div>

                            <div className="w-20 flex mx-auto mt-2">
                                <button
                                    type="submit"
                                        className="flex mr-2 font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Submit
                                     {loading ?
                                                <img src={loader} alt="loading..." className=" text-center w-8 mx-4 opacity-70 animate-spin  " />
                                                : <div></div>
                                            }
                                    </button>

                            </div>



                        </form>


                        </div>
                        </Bounce>


                    <div className=" flex flex-col justify-center text-left md:w-96 md:mx-20 mx-10 mt-10">
                        <h1 className="text-3xl font-bold text-indigo-400">Post the job based on your requirements</h1>
                        <h1 className="text-3xl font-semibold py-4">and hire best people for your work</h1>

                        <img src={banner} alt="postjob" className="rounded-full md:w-80 md:h-80 w-40 h-40 m-10 " />

                    </div>

                </div>

            </div>
        </div>
    );
}

export default JobInfoForm;