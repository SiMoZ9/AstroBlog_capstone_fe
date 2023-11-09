import React, {useState, useContext} from 'react'
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
import {Button, Input, Typography} from "@material-tailwind/react";
import {PiInstagramLogo, PiMetaLogo} from "react-icons/pi";
import {Link, useNavigate} from "react-router-dom";
import {RiTwitterXLine} from "react-icons/ri";

const InstrumentInfo = () => {

    const {user, loading, setLoading, error, setError} = useContext(UserProvider)

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <VerticalNav>
                {!loading && !error && user.userEmail && (
                    <>
                        <div className="flex">
                            <div>
                                <div className="py-6">
                                    <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                        <div className="w-screen flex flex-col justify-center rounded-[20px] p-4 bg-gray-100">
                                            <Typography variant="h5">Instrumentation info</Typography>

                                            <form className="mt-6" onSubmit={handleSubmit}>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <div>
                                                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telescope</label>
                                                        <Input name="firstName" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.userEmail.firstName}
                                                               onChange={handleInputChange}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Camera</label>
                                                        <Input name="lastName" type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.userEmail.lastName}
                                                               onChange={handleInputChange}/>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filters</label>

                                                        <Input name="userName" type="text"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                                               placeholder={user.userEmail.userName}
                                                               onChange={handleInputChange}/>
                                                    </div>

                                                </div>
                                                <div className="mb-6">
                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                                    <Input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.userEmail.email}
                                                           onChange={handleInputChange}/>
                                                </div>
                                                <Button type="submit" className="bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit changes</Button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )}
            </VerticalNav>

        </>    )
}

export default InstrumentInfo