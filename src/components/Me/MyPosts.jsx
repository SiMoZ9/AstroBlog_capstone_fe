import React, {useState, useEffect, useContext} from "react";
import {useFetch} from "../../hooks/useFetch";
import PostCard from "../Latest/PostCard/PostCard";
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
import {RingLoader} from "react-spinners";
import {Button, Typography} from "@material-tailwind/react";
import {FaRegSadTear} from "react-icons/fa";
import {Link} from "react-router-dom";
import {MdAddPhotoAlternate} from "react-icons/md";
import NavAccount from "../nav/NavAccount";

const MyPosts = () => {

    const {details, loading, setLoading, error, setError} = useContext(UserProvider);

    const [myPosts, setMyPosts] = useState({})

    const fetchMyPosts = useFetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/account/posts/${JSON.parse(localStorage.getItem('loggedInUser'))}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
        }
    })

    useEffect(() => {
        setLoading(true)
        fetchMyPosts.then((res) => {
            setMyPosts(res)
            setLoading(false)
        })
            .catch(err => setError(err))
    }, []);

    console.log(myPosts.userInfo)

    return (
        <>
            <NavAccount />

            {loading && !error && <>
                    <RingLoader
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </>}

                {!loading && !error && (myPosts.length === 0) &&
                    <div className="w-screen h-full mt-12 flex flex-col items-center">
                        <FaRegSadTear className="text-[24em] mb-4"/>
                        <Typography variant="h1" className="text-4xl">
                            No posts found
                        </Typography>
                        <Link to="/publish">
                            <Button
                                variant="gradient"
                                size="md"
                                className="hidden mt-4 lg:inline-block"
                            >
                                <span className="flex items-center justify-center">Upload!<MdAddPhotoAlternate
                                    className="ml-1"/></span>
                            </Button>
                        </Link>
                    </div>
                }

                {!loading && error &&
                    <>
                        <Typography variant="h1">
                            Error loading posts
                        </Typography>
                    </>
                }

                {!loading && !error && myPosts.userInfo && myPosts.userInfo.map((post, i) => (
                    <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 mt-10 mb-5 w-fit mx-auto bg-gray-100 p-4 rounded-[20px]">
                        <PostCard
                            title={post.title}
                            cover={post.mainPic}
                            buttonText={"Modifica post"}
                            linkTo={`/skyPost/edit/${post._id}`}
                        />
                    </div>
                ))}
        </>
    )
}

export default MyPosts