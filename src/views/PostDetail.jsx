import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import {useFetch} from "../hooks/useFetch";
import { Typography } from "@material-tailwind/react";
const PostDetail = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [details, setDetails] = useState({})

    const {id} = useParams()
    console.log(id)

    const fetchData = useFetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
        }
    })

    useEffect(() => {
        setLoading(true)
        fetchData.then((res) => {
            setDetails(res.thisPost)
            console.log(details)
            setLoading(false)
        })
            .catch((err) => setError(err))
    }, [])

    return (
        <>
            <NavigationPostLogin />
            <main className="w-screen h-screen pt-12 bg-gray-900">
                <div className="flex flex-col w-96">

                    <div className="flex flex-col justify-center w-screen items-center">
                        <Typography variant="h1" color="white">
                            {details.title}
                        </Typography>
                        <Typography variant="h6" color="white">
                            {details.object}
                        </Typography>

                        <img
                            className="h-96 rounded-lg object-cover object-center mt-4 mb-4"
                            src={details.mainPic}
                            alt="mainPic"
                        />

                        <div className="flex items-center justify-center p-4">
                            <img src={details.author.avatar} alt="" className="h-20 w-20 rounded-full object-cover object-center"/>
                            <Typography variant="h1" color="white" className="ml-4 text-2xl">
                                {details.author.userName}
                            </Typography>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default PostDetail