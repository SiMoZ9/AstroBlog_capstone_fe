import React, {useContext, useState, useEffect} from 'react';
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
import {Button, Input, Typography} from "@material-tailwind/react";
import TimezoneSelect from 'react-timezone-select'
import {PiMetaLogo, PiInstagramLogo} from "react-icons/pi"
import {RiTwitterXLine} from "react-icons/ri"
import {Link, useNavigate} from "react-router-dom"

const UserInfo = () => {
    const {user, setUser, loading, setLoading, error, setError} = useContext(UserProvider);
    const [selectedTimezone, setSelectedTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    const [date, setDate] = useState("Date")
    const [formData, setFormData] = useState({})
    const [editData, setEditData] = useState(null)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postData = await fetch(`${process.env.REACT_APP_ENDPOINT}/users/${JSON.parse(localStorage.getItem('loggedInUser'))}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
                },
                method: 'PATCH',
                body: JSON.stringify(formData)
            })

            if (localStorage.getItem('loggedInUser')) {
                console.log(localStorage.getItem('loggedInUser'))
                navigate("/account")
            } else {
                console.log("Not authorized")
            }
        } catch (err) {
            console.log(err)
        }
    }


    const handleBirthChange = (e) => {
        setDate(e.target.value)
        console.log(date)
    }

    return (
        <>
            <VerticalNav>
                {!loading && !error && user.userEmail && (
                    <>
                        <div className="flex flex-col">
                            <div>
                                <div className="py-6">
                                    <div className="flex flex-col px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                        <div id="user"
                                             className="w-96 flex justify-between items-center rounded-[20px] p-4 bg-gray-100">
                                            <img
                                                className="rounded-full w-20"
                                                src={user.userEmail.avatar}
                                            />

                                            <div className="flex flex-col justify-center items-center">
                                                <Typography variant="h6">
                                                    {user.userEmail.userName}
                                                </Typography>

                                                <Button className="text-center">
                                                    Change picture
                                                </Button>

                                            </div>
                                        </div>
                                        <div id="lang"
                                             className="mt-6 w-96 flex flex-col  rounded-[20px] p-5 bg-gray-100 divide-solid">

                                            <Typography variant="h5">
                                                Language & Time
                                            </Typography>

                                            <div className="mt-6">
                                                <Typography variant="h6" className="mb-2">
                                                    Timezone
                                                </Typography>
                                                <TimezoneSelect
                                                    className=""
                                                    value={selectedTimezone}
                                                    onChange={setSelectedTimezone}
                                                />
                                            </div>
                                        </div>
                                        <div id="socials"
                                             className="mt-6 w-96 flex flex-col  rounded-[20px] p-5 bg-gray-100 divide-solid">
                                            <Typography variant="h5">
                                                Social
                                            </Typography>
                                            <div className="mt-6 flex items-center">
                                                <PiMetaLogo className="mr-4"/>
                                                <div>
                                                    <Typography variant="h6">Meta</Typography>
                                                    <Link to="#">
                                                        {
                                                            user.userEmail.socials && user.userEmail.socials.facebook &&
                                                            <Typography variant="h6"
                                                                        className="decoration-2 underline text-[10px]"
                                                                        color="blue">{user.userEmail.socials.facebook}</Typography>
                                                        }
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center">
                                                <PiInstagramLogo className="mr-4"/>
                                                <div>
                                                    <Typography variant="h6">Instagram</Typography>
                                                    <Link to="#">
                                                        {
                                                            user.userEmail.socials && user.userEmail.socials.ig &&
                                                            <Typography variant="h6"
                                                                        className="decoration-2 underline text-[10px]"
                                                                        color="blue">{user.userEmail.socials.ig}</Typography>
                                                        }
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center">
                                                <RiTwitterXLine className="mr-4"/>
                                                <div>
                                                    <Typography variant="h6">X</Typography>
                                                    <Link to="#">
                                                        {
                                                            user.userEmail.socials && user.userEmail.socials.x &&
                                                            <Typography variant="h6"
                                                                        className="decoration-2 underline text-[10px]"
                                                                        color="blue">{user.userEmail.socials.x}</Typography>
                                                        }
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <div className="py-6">
                                    <div className="flex px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                        <div
                                            className="w-screen flex flex-col justify-center rounded-[20px] p-4 bg-gray-100">
                                            <Typography variant="h5">General info</Typography>

                                            <form className="mt-6" onSubmit={handleSubmit}>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <div>
                                                        <label htmlFor="first_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                                            name</label>
                                                        <Input name="firstName" type="text" id="first_name"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder={user.userEmail.firstName}
                                                               onChange={handleInputChange}/>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                                            name</label>
                                                        <Input name="lastName" type="text" id="last_name"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder={user.userEmail.lastName}
                                                               onChange={handleInputChange}/>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="user_name"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                                        <Input name="userName" type="text" id="userName"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder={user.userEmail.userName}
                                                               onChange={handleInputChange}/>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="birth"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                                                        <Input name="birth" type="date" id="birth"
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               onChange={handleBirthChange}
                                                        />
                                                    </div>


                                                </div>
                                                <div className="mb-6">
                                                    <label htmlFor="email"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                                        address</label>
                                                    <Input name="email" type="email" id="email"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder={user.userEmail.email}
                                                           onChange={handleInputChange}/>
                                                </div>
                                                <Button type="submit"
                                                        className="bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit
                                                    changes</Button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )}
            </VerticalNav>

        </>
    )
}

export default UserInfo