import React, {useState, useContext} from 'react'
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
import {Button, Input, Typography} from "@material-tailwind/react";
import {PiInstagramLogo, PiMetaLogo} from "react-icons/pi";
import {Link, useNavigate} from "react-router-dom";
import {RiTwitterXLine} from "react-icons/ri";

const InstrumentInfo = () => {

    const {user, loading, setLoading, error, setError} = useContext(UserProvider)

    const [formData, setFormData] = useState({})
    const [NarrowBandFilters, setNarrowBandFilters] = useState([{ filters: "" }])
    const [BroadBandFilters, setBroadBandFilters] = useState([{ filters: "" }])
    const [telescopes, setTelescopes] = useState([{telescopes: ""}])
    const [cameras, setCameras] = useState([{cameras: ""}])
    const [mounts, setMounts] = useState([{mounts: ""}])
    const [guide, setGuide] = useState([{guide: ""}])

    const navigate = useNavigate()

    const handleInputAddNarrow = () => {
        setNarrowBandFilters([...NarrowBandFilters, {filters: ""}])
    }

    const handleInputAddBroad = () => {
        setBroadBandFilters([...BroadBandFilters, {filters: ""}])
    }

    const handleInputTelescopes = () => {
        setTelescopes([...telescopes, {telescopes: ""}])
    }

    const handleInputCameras = () => {
        setCameras([...cameras, {cameras: ""}])
    }

    const handleInputMounts = () => {
        setMounts([...mounts, {mounts: ""}])
    }

    const handleInputGuide = () => {
        setGuide([...guide, {guide: ""}])
    }

    const handleInputChange = (e, i) => {
        const {name, id, value} = e.target

        setFormData({
            ...formData,
            [`${name}`]: value
        }
        )

        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <VerticalNav>
                {!loading && !error && user.userEmail && (
                    <>
                        <div className="flex">
                            <div>
                                <div className="py-6">
                                    <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                        <div className="w-screen flex flex-col justify-center rounded-[20px] p-4 bg-gray-100">
                                            <Typography variant="h5">Instrumentation info</Typography>

                                            <form className="mt-6" onSubmit={handleSubmit}>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <div>
                                                        <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telescopes</Typography>
                                                        {
                                                            telescopes.map((filterElement, index) => (
                                                                <div className="flex mb-4" id={index}>

                                                                    <Input type="text"
                                                                           name={`telescope${index}`}
                                                                           id={index}
                                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                           onChange={(e) => handleInputChange(e, index)}/>

                                                                    <Button className="ml-4 bg-gray-900" onClick={handleInputTelescopes}>
                                                                        +
                                                                    </Button>
                                                                    {console.log(telescopes)}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div>
                                                        <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cameras</Typography>
                                                        {
                                                            cameras.map((filterElement, index) => (
                                                                <div className="flex mb-4" id={index}>

                                                                    <Input type="text"
                                                                           name="cameras"
                                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                           onChange={(e) => handleInputChange(e, index)}/>

                                                                    <Button className="ml-4 bg-gray-900" onClick={handleInputCameras}>
                                                                        +
                                                                    </Button>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                    <div>
                                                        <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Narrowband filters</Typography>
                                                        {
                                                            NarrowBandFilters.map((filterElement, index) => (
                                                                <div className="flex mb-4" id={index}>

                                                                    <Input type="text"
                                                                           name="narrowband"
                                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                           onChange={(e) => handleInputChange(e, index)}/>

                                                                    <Button className="ml-4 bg-gray-900" onClick={handleInputAddNarrow}>
                                                                        +
                                                                    </Button>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div>
                                                        <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Broadband filters</Typography>
                                                        {
                                                            BroadBandFilters.map((filterElement, index) => (
                                                                <div className="flex mb-4" id={index}>

                                                                    <Input type="text"
                                                                           name="broadband"
                                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                           onChange={(e) => handleInputChange(e, index)}/>

                                                                    <Button className="ml-4 bg-gray-900" onClick={handleInputAddBroad}>
                                                                        +
                                                                    </Button>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mounts</Typography>
                                                            {
                                                                mounts.map((filterElement, index) => (
                                                                    <div className="flex mb-4" id={index}>

                                                                        <Input type="text"
                                                                               name="mounts"
                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                               onChange={(e) => handleInputChange(e, index)}/>

                                                                        <Button className="ml-4 bg-gray-900" onClick={handleInputMounts}>
                                                                            +
                                                                        </Button>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>


                                                    <div>
                                                        <div>
                                                            <Typography className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guides Camera</Typography>
                                                            {
                                                                guide.map((filterElement, index) => (
                                                                    <div className="flex mb-4" id={index}>

                                                                        <Input type="text"
                                                                               name="guide"
                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                               onChange={(e) => handleInputChange(e, index)}/>

                                                                        <Button className="ml-4 bg-gray-900" onClick={handleInputGuide}>
                                                                            +
                                                                        </Button>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>


                                                </div>
                                                <Button type="submit" className="bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit changes</Button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )}
            </VerticalNav>

        </>    )
}

export default InstrumentInfo