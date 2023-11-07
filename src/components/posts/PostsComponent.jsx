import React, {useContext} from 'react';
import NavigationPostLogin from "../nav/NavigationPostLogin";
import {Typography} from "@material-tailwind/react";
import DetailTable from "../Table/DetailTable";
import StarMap from "../StarMap/StarMap";
import {DetailProvider} from "../../context/DetailsContext";

const DetailComponent = () => {

    const {details, star, setStar, typeOfView, setTypeOfView, loading, setLoading, error} = useContext(DetailProvider)

    return (
        <>
            <NavigationPostLogin />
            {!loading && !error && details && (
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
                                <img src={details.author.avatar} alt="avatar" className="h-20 w-20 rounded-full object-cover object-center"/>
                                <Typography variant="h1" color="white" className="ml-4 text-2xl">
                                    {details.author.userName}
                                </Typography>
                            </div>

                            <div>
                                <DetailTable
                                    telescope={details.description.instrumentation.telescope}
                                    camera={details.description.instrumentation.camera}
                                    filters={details.description.instrumentation.filters}
                                    constellation={details.description.place.constellation}
                                    lat={details.description.place.coordinates.latitude}
                                    long={details.description.place.coordinates.longitude}
                                    ra={details.description.place.coordinates.ra}
                                    dec={details.description.place.coordinates.dec}
                                    date={details.description.place.coordinates.date}
                                />
                            </div>

                            <StarMap />
                            {console.log(star)}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default DetailComponent;
