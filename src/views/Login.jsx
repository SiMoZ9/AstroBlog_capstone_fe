import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import useSession from "../hooks/useSession";
import logo from "../assets/logo_upscayl_16x_realesrgan-x4plus-anime.png"

import {
    Card,
    Input,
    Button,
    Typography,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList
} from "@material-tailwind/react";
import NavigationNoLog from "../components/nav/Navigation";
import NavigationLogin from "../components/nav/NavigationLogin";
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const [login, setLogin] = useState(null)

    const navigate = useNavigate()
    const session = useSession()

    useEffect(() => {
        if (session) {
            navigate('/personalHome')
        }
    }, []);
    const handleInputChange = (e) => {
        const {name, value} = e.target

        setLoginData({
            ...loginData,
            [name]: value
        })

        console.log(loginData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postData = await fetch(`http://localhost:5050/login`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(loginData)
            })
            const data = await postData.json()
            console.log(loginData)

            if (data.token) {
                localStorage.setItem('loggedInUser', JSON.stringify(data.token))
                navigate("/personalHome")
            }
            setLogin(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className="w-screen bg-cover bg-center bg-[url('https://stsci-opo.org/STScI-01H44AY5ZTCV1NPB227B2P650J.png')] bg-gray-500 bg-blend-soft-light relative">
            <NavigationLogin/>

            <div className="absolute left-[50%] top-[25%] translate-x-[-50%] translate-y-[-50%]">
                <img src={logo} alt="logo" className="w-[500px]"/>
            </div>
            <div className="min-h-screen max-h-screen flex flex-col items-center justify-center overflow-hidden">
            <Card className="bg-blue-gray-900 items-center p-5 bg-opacity-80" shadow={false}>
                <Typography variant="h4" color="white">
                    Login
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Salve! Entra subito e condividi l'universo con la community
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="white" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            name="password"
                            size="lg"
                            placeholder="********"
                            onChange={handleInputChange}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Entra
                    </Button>
                </form>
            </Card>
            </div>
        </main>
    );
};

export default Login;


