import React, {useState, useEffect} from 'react';
import {useFetch} from "../../../hooks/useFetch";
import PostCard from "../PostCard/PostCard";
import {RingLoader} from "react-spinners";
import {nanoid} from "nanoid";
import login from "../../../views/Login";

const LatestPost = () => {

    const [post, setPosts] = useState({})
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
        fetchData.then((res) => {
            setPosts(res)
        })
            .catch((err) => {
                console.log(err)
            })
        setLoading(false)
    }, []);

    console.log(post.posts)

    return (
        <section>
            <div>{!loading && !error}</div>
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 items-center justify-center gap-y-20 gap-x-14 m-5 p-5 rounded-[20px] bg-gray-200">
                {error && <h1>Errore durante il caricamento dei post</h1>}
                {loading && !error && (
                    <RingLoader
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                )}


                {!loading &&
                    !error && post.posts && post.posts.map(post => (
                        <>
                            <PostCard
                                key={nanoid()}
                                title={post.title}
                                cover={post.mainPic}
                            />
                        </>
                    ))
                    }
            </div>
        </section>
    )
}

export default LatestPost;