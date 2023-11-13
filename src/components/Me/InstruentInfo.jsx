import React, {useState, useContext} from 'react'
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
import {Button, Input, Typography} from "@material-tailwind/react";
import {PiInstagramLogo, PiMetaLogo} from "react-icons/pi";
import {Link, useNavigate} from "react-router-dom";
import {RiTwitterXLine} from "react-icons/ri";
import MultipleInputs from "../MultipleInputs/MultipleInputs";
import NavAccount from "../nav/NavAccount";

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
            [`${name}`]: value,
            [telescopes]: value
        }
        )

        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <NavAccount />
                {!loading && !error && user.userEmail && (
                    <>
                        <div className="flex w-full justify-center">
                            <div>
                                <div className="py-6">
                                    <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                        <div className="w-screen flex flex-col justify-center rounded-[20px] p-4 bg-gray-100">
                                            <Typography variant="h5">Instrumentation info</Typography>
                                            <form className="mt-6" onSubmit={handleSubmit}>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <MultipleInputs name={"telescopes"} section={"Telescopes"} mappedObj={telescopes} onChangeHandler={handleInputChange} onClinkHandler={handleInputTelescopes}/>
                                                    <MultipleInputs name={"cameras"} section={"Cameras"} mappedObj={cameras} onChangeHandler={handleInputChange} onClinkHandler={handleInputCameras}/>
                                                    <MultipleInputs name={"narrowband"} section={"Narrowband filters"} mappedObj={NarrowBandFilters} onChangeHandler={handleInputChange} onClinkHandler={handleInputAddNarrow}/>
                                                    <MultipleInputs name={"broadband"} section={"Broadband filters"} mappedObj={BroadBandFilters} onChangeHandler={handleInputChange} onClinkHandler={handleInputAddBroad}/>
                                                    <MultipleInputs name={"mounts"} section={"Mounts"} mappedObj={mounts} onChangeHandler={handleInputChange} onClinkHandler={handleInputMounts}/>
                                                    <MultipleInputs name={"guides"} section={"Guide cameras"} mappedObj={guide} onChangeHandler={handleInputChange} onClinkHandler={handleInputGuide}/>

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
        </>    )
}

export default InstrumentInfo