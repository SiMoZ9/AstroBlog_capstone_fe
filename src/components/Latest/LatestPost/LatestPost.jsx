import React, {useState, useEffect} from 'react';
import {useFetch} from "../../../hooks/useFetch";
import PostCard from "../PostCard/PostCard";
import {RingLoader} from "react-spinners";
import {nanoid} from "nanoid";

const LatestPost = () => {

    const [posts, setPosts] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = useFetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/all`, {
        headers: {
            "Content-type": 'application/json',
            "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
        }
    })

    useEffect(() => {
        setLoading(true)
        if (fetchData) {
            setPosts(fetchData)
            setLoading(false)
            console.log(posts)
        } else {
            setError("Error")
        }
    }, []);

    return (
        <section>
            <div>{!loading && !error}</div>
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 w-fit mx-auto">
                {error && <h1>Errore durante il caricamento dei post</h1>}
                {loading && !error && (
                    <RingLoader
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                )}


                {!loading &&
                    !error && (
                        <>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </>
                    )}
            </div>
        </section>
    )
}

export default LatestPost;