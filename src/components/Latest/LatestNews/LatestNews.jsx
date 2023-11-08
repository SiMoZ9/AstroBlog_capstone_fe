import NasaCarousel from "../../Carusel/Carousel";
import React, {useEffect, useState} from "react";
import {RingLoader} from "react-spinners";
import PostCard from "../PostCard/PostCard";
import {Typography} from "@material-tailwind/react";
const LatestNews = () => {


    const API_KEY = "98c822f8-5530-4c14-aa09-053c2fb5ee9f"


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [JWSTdata, setJWSTdata] = useState({})


    const jwstFetch = async () => {
        try {
            setLoading(true)
            const jwst = await fetch(`https://api.jwstapi.com/all/type/jpg`, {
                    headers: {
                        "Content-Type": "application/json",
                        'X-API-KEY': `${API_KEY}`
                    }
                }
            )
            const data = await jwst.json()
            if (data) {
                setJWSTdata(data)
                setLoading(false)
            }
            console.log(loading)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        jwstFetch()
    }, []);


    return (
        <>
        <div className="flex flex-col justify-center items-center m-5 p-4 rounded-[20px] bg-gray-200">
            <Typography variant="h3" className="p-4">
                Ultimi dati dal JWST
            </Typography>
            <div className="w-[1280px] h-[720px]">
                {error && <h1>Errore durante il caricamento dei post</h1>}
                {loading && !error && (
                    <div className="flex justify-center items-center h-full">
                    <RingLoader
                        size={300}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <NasaCarousel
                            pic1={JWSTdata.body[0].location}
                            pic2={JWSTdata.body[1].location}
                            pic3={JWSTdata.body[2].location}
                        />
                    </>
                    )}
            </div>
        </div>

            <Typography variant="h3" className="text-center p-4">
                News
            </Typography>
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 w-fit mx-auto">
                {error && <h1>Errore durante il caricamento dei post</h1>}
                {loading && !error && (
                    <div className="flex justify-center items-center h-full">
                        <RingLoader
                            size={300}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
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
                        </>
                    )}
            </div>
        </>
    )
}

export default LatestNews