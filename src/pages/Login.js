import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import loginImg from '../assets/login-img.jpg'
import loader from '../assets/loader.svg'

import { useForm } from "react-hook-form";
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


// import { RadioGroup, RadioButton } from 'react-radio-buttons'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";



const Login = () => {

    const { register, handleSubmit } = useForm();
    const [userType, setUserType] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const history = useHistory();


    useEffect(() => {
        // console.log(userType)

        if (localStorage.getItem('user')) {
            history.push('/')
        }
    })


    async function loginUser(data) {

        try {
            setLoading(true)
            let user = {
                Phone_no: data.phoneNo,
                Password: data.password,
            }

            let result = await $.post('http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/commonuser/login', user)
            if (result == null) {
                throw new Error('Login failed! Credentials did not match. ')
            }

            setLoading(false)
            localStorage.setItem('user', JSON.stringify(result))
            history.push('/')

        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)
        }

    }

    async function loginWorker(data) {

        try {
            setLoading(true)

            let user = {
                Phone_no: data.phoneNo,
                Password: data.password,
            }

            let result = await $.post('http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/workers/login', user)

            if (result == null) {
                throw new Error('Login failed! Credentials did not match. ')
            }
            setLoading(false)

            localStorage.setItem('user', JSON.stringify(result))
            history.push('/find-people')

        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)

        }

    }

    async function loginEnterprise(data) {

        try {
            setLoading(true)

            let user = {
                Email: data.email,
                Password: data.password,
            }

            let result = await $.post('http://ubuntu@ec2-54-211-35-3.compute-1.amazonaws.com:3000/API/enterpriceuser/login', user)
            if (result == null) {
                throw new Error('Login failed! Credentials did not match. ')
            }
            setLoading(false)

            localStorage.setItem('user', JSON.stringify(result))
            history.push('/find-people')

        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)
        }

    }




    const onSubmit = (data) => {
        // e.preventDefault();
        console.log('donne')
        console.log(data)

        if (userType === 'Common user') {
            loginUser(data);
        } else if (userType === 'Enterprise') {
            loginEnterprise(data);
        } else if (userType === 'Worker') {
            loginWorker(data);
        }



    }



    return (
        <div className="bg-gray-50 ">
            <Navbar />
            <div className="md:py-10 ">
                <Fade bottom>
                <div className="md:w-8/12 bg-white p-20  shadow-md border-2  rounded-md m-auto">
                    <h1 className="text-3xl font-semibold text-gray-500 ">Welcome back !</h1>


                    <div className="flex md:flex-row flex-col justify-center">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="md:w-1/2 mt-10 flex flex-col">

                                <div className="text-xl md:w-60  ml-2 py-2 font-medium"
                                >
                                    <DropdownList
                                        defaultValue="Choose user type"
                                        data={["Common user", "Enterprise", "Worker"]}
                                        onChange={value => setUserType(value)}

                                    />

                                </div>

                                {
                                    (userType === 'Enterprise') ?
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email"
                                            className="m-2 p-2 border-2 bg-gray-50 rounded md:w-80 text-xl focus:outline-none focus:border-indigo-500"
                                            name="email"
                                            {...register("email")}

                                        /> :
                                        <input
                                            required
                                            type="text"
                                            placeholder="Phone no"
                                            className="m-2 p-2 border-2 bg-gray-50 rounded md:w-80 text-xl focus:outline-none focus:border-indigo-500"
                                            name="phoneNo"
                                            {...register("phoneNo")}

                                        />


                                }
                                <input
                                    required
                                    type="password"
                                    placeholder="Password"
                                    className="m-2 p-2 border-2 bg-gray-50 rounded md:w-80 text-xl focus:outline-none focus:border-indigo-500"
                                    name="password"
                                    {...register("password")}
                                />

                                <button
                                    type="submit"
                                    className="m-2 w-32 font-semibold bg-indigo-400 text-white text-xl px-4 py-2 rounded">Login</button>
                            </div>


                        </form>
                        <div >
                            {loading ?
                                <img src={loader} alt="loading..." className="mx-auto text-center w-10 opacity-70 animate-spin  " />
                                : <div></div>
                            }

                            {error ?
                                <div className="bg-red-50 text-center text-red-400 m-4 p-2">{error.message}</div>
                                : <div></div>
                            }
                            <img src={loginImg} alt="login" className=" " />
                        </div>
                    </div>


                    </div>
                    </Fade>
            </div>

        </div>
    );
}

export default Login;