import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";
import useSession from "../hooks/useSession";
import logo from "../assets/logo_upscayl_16x_realesrgan-x4plus-anime.png"

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import NavigationLogin from "../components/nav/NavigationLogin";

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [login, setLogin] = useState(null)

    const navigate = useNavigate()
    const session = useSession()

    useEffect(() => {
        if (session) {
            navigate('/personalHome')
        } else navigate('/signup')
    }, []);
    const handleInputChange = (e) => {
        const {name, value} = e.target

        setLoginData({
            ...loginData,
            [name]: value
        })

        console.log(loginData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postData = await fetch(`http://localhost:5050/users/create`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(loginData)
            })
            const data = await postData.json()
            console.log(loginData)

            if (data.token) {
                localStorage.setItem('loggedInUser', JSON.stringify(data.token))
                navigate("/personalHome")
            }
            setLogin(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-center bg-[url('https://stsci-opo.org/STScI-01H44AY5ZTCV1NPB227B2P650J.png')]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-[300px]"
                        src={logo}
                        alt="Your Company"
                    />
                    <Typography variant="h1" className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </Typography>
                </div>

                <div className="mt-10 h-[50vh] sm:mx-auto sm:w-full sm:max-w-sm rounded-[10px]">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleInputChange}

                                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <Input
                                    id="username"
                                    name="userName"
                                    type="text"
                                    onChange={handleInputChange}
                                    
                                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleInputChange}
                                    
                                    className="block bg-white w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Verify password
                            </label>
                            <div className="mt-2">
                                <Input
                                    id="verify_password"
                                    name="verify_password"
                                    type="password"
                                    
                                    className="block bg-white  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                            >
                                Sign up
                            </button>
                        </div>


                        <p className="mt-10 text-center text-sm text-white">
                            Registered?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-gray-900 hover:text-gray-800">
                                Login now!
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;


