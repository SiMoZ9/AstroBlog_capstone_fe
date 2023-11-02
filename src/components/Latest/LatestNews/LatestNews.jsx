import NasaCarousel from "../../Carusel/Carousel";
import React, {useEffect, useState} from "react";
import {useFetch} from "../../../hooks/useFetch";
const LatestNews = () => {


    const API_KEY = "VUUqStlksMV8EHLZcKCyZ3T6aKksTzaEgvcuOQBk"

    const [apod1, setApod1] = useState("")
    const [apod2, setApod2] = useState("")
    const [apod3, setApod3] = useState("")

    const pic1 = useFetch(`${process.env.REACT_APP_NASA_APOD}?api_key=${API_KEY}`, {})
    const pic2 = useFetch(`${process.env.REACT_APP_NASA_APOD}?date=2023-11-01&api_key=${API_KEY}`, {})
    const pic3 = useFetch(`${process.env.REACT_APP_NASA_APOD}?date=2023-10-31&api_key=${API_KEY}`, {})
    useEffect(() => {
        pic1.then((res) => {
            console.log(res)
            setApod1(res.hdurl)
            console.log(apod1)
        })

        pic2.then((res) => {
            console.log(res)
            setApod2(res.hdurl)
            console.log(apod2)
        })

        pic3.then((res) => {
            console.log(res)
            setApod3(res.hdurl)
            console.log(apod3)
        })

    }, []);


    return (
        <div className="flex justify-center items-center mt-4 h-full">
            <div className="w-full h-full">
                <NasaCarousel
                    pic1={apod1}
                    pic2={apod2}
                    pic3={apod3}
                />
            </div>
        </div>
    )
}

export default LatestNews