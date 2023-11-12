import React, {useContext, useState, useEffect} from 'react';
import {useFetch} from '../../hooks/useFetch'
import {Typography} from "@material-tailwind/react";
import {ProfileProvider} from "../../context/ProfileContext";
import {useParams} from "react-router-dom";

const UserPost = () => {

    const {profile, loading, setLoading, error, setError} = useContext(ProfileProvider)

    const [userPosts, setUserPosts] = useState({})
    const {id} = useParams()

    const fetchUserPost = useFetch(`${process.env.REACT_APP_ENDPOINT}/skyPosts/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
        }
    })

    useEffect(() => {
        setLoading(true)
        fetchUserPost.then(userPosts => {
            console.log(userPosts)
            setLoading(false)
        }).catch(err => setError(err))
    }, []);


    return (
        <main>
            <div>
                {!loading && !error && profile &&
                    <div className="flex justify-center mt-6">
                        <Typography variant="h1">
                            I post di {profile.userToGet.userName}
                        </Typography>
                    </div>
                }
                <div>
                </div>
            </div>
        </main>
    );
};

export default UserPost;
