import React, {useContext, useEffect, useState} from "react"
import {useFetch} from "../../hooks/useFetch";
import {DetailProvider} from "../../context/DetailsContext";
import { Card, Typography } from "@material-tailwind/react";
import login from "../../views/Login";
import {RingLoader} from "react-spinners";

const StarMap = ({type}) => {

    const {details, star, setStar, typeOfView, setTypeOfView, error, setError} = useContext(DetailProvider)
    const [loading, setLoading] = useState(true)

    const authString = btoa(`${process.env.REACT_APP_ASTRO_APP_ID}:${process.env.REACT_APP_ASTRO_APP_SECRET}`);

    const body = {
        "observer": {
            "latitude": details.description.place.coordinates.latitude,
            "longitude": details.description.place.coordinates.longitude,
            "date": details.description.place.coordinates.date,
        },
        "view": {
            "type": "area",
            "parameters": {
                "position": {
                    "equatorial": {
                        "rightAscension": details.description.place.coordinates.ra,
                        "declination": details.description.place.coordinates.dec
                    }
                },
                "zoom": 3 //optional
            }
        }
    }



    const starFetch = useFetch(`${process.env.REACT_APP_ASTRONOMY_API}/studio/star-chart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${authString}`,
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body),
    })

    useEffect(() => {
        setLoading(true)
        starFetch.then((res) => {
            console.log(res)
            setStar(res)
            console.log(star)
        }).catch(err => {
            setError(err)
        })
        setLoading(false)
    }, []);

    return (
        <>
            {console.log(loading)}
            {loading && !error && (
                <RingLoader
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}

            {!loading && !error && star.data && (
            <Card>
                <img src={star.data.imageUrl} alt="star-chart" />
            </Card>
            )
            }
        </>

    )
}
export default StarMap