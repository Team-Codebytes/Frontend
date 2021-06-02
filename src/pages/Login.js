import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import loginImg from '../assets/login-img.jpg'
import { useForm } from "react-hook-form";
import $ from 'jquery'
import { useHistory } from 'react-router-dom'


// import { RadioGroup, RadioButton } from 'react-radio-buttons'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";



const Login = () => {

    const { register, handleSubmit } = useForm();
    const [userType, setUserType] = useState('')
    const history = useHistory();


    useEffect(() => {
        // console.log(userType)

        if (localStorage.getItem('user')) {
            history.push('/')
        }
    })


    async function loginUser(data) {

        let user = {

            Phone_no: data.phoneNo,
            Password: data.password,

        }

        let result = await $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/commonuser/login', user)

        localStorage.setItem('user', JSON.stringify(result))
        history.push('/')

    }

    async function loginWorker(data) {

        let user = {

            Phone_no: data.phoneNo,
            Password: data.password,
        }

        let result = await $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/workers/login', user)

        localStorage.setItem('user', JSON.stringify(result))
        history.push('/find-people')

    }

    async function loginEnterprise(data) {

        let user = {

            Email: data.email,
            Password: data.password,
        }

        let result = await $.post('https://unorganisedsectorbackbnd.herokuapp.com/API/enterpriceuser/login', user)

        localStorage.setItem('user', JSON.stringify(result))
        history.push('/find-people')

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
            <div className="md:py-20 ">
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

                        <img src={loginImg} alt="login" className=" md:w-1/2" />

                    </div>


                </div>
            </div>

        </div>
    );
}

export default Login;