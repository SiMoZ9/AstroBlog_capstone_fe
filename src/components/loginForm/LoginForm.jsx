import NavigationLogin from "../nav/NavigationLogin";
import logo from "../../assets/logo_upscayl_16x_realesrgan-x4plus-anime.png";
import {Button, Card, Input, Typography} from "@material-tailwind/react";
import React from "react";
import {Link} from "react-router-dom";


export const LoginForm = ({handleSubmit, handleInputChange, field1, field2, field3, field4}) => {
    return (
        <>
            <NavigationLogin/>
            <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="">
                    <img src={logo} alt="logo" className="w-[300px]"/>
                </div>
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
                                {field1}
                            </Typography>
                            <Input
                                size="lg"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                color="white"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="white" className="-mb-3">
                                {field2}
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
                        <Typography color="white" className="mt-4 text-center font-normal">
                            Non hai un account?{" "}
                            <Link to="/signup" className="font-medium text-gray-900">
                                Registrati
                            </Link>
                        </Typography>
                    </form>

                </Card>

            </div>
        </>
    )
}

export default LoginForm