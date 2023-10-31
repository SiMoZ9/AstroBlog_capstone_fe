import React, {useState, useEffect} from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse
} from "@material-tailwind/react";

import {Link, useNavigate} from "react-router-dom"
import {MdAddPhotoAlternate} from 'react-icons/md'
import logo from "../../assets/logo_upscayl_16x_realesrgan-x4plus-anime.png";

const NavigationPostLogin = ({userName, userPic}) => {
    const [openNav, setOpenNav] = useState(false);
    const [openAccountSettings, setOpenAccountSettings] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="#" className="flex items-center">
                    Esplora
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="#" className="flex items-center">
                    Chi siamo
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="#" className="flex items-center">
                    Contatti
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="max-h-[768px] w-screen overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/personalHome">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[100px]"
                    />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Link to="/publish">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span className="flex items-center justify-center">Carica immagine <MdAddPhotoAlternate className="ml-1"/></span>
                            </Button>
                            </Link>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                                onClick={() => setOpenAccountSettings(!openAccountSettings)}
                            >
                                <span>Il tuo account</span>
                                <Collapse open={openAccountSettings}>
                                    <div className="flex items-center gap-x-1 mt-1">
                                        <Link to='/account'>
                                            <Button fullWidth variant="filled" color="white" size="sm">
                                                <span className="flex items-center justify-center text-[10px]">Impostazioni</span>
                                            </Button>
                                        </Link>
                                        <Button fullWidth variant="filled" color="white" size="sm">
                                            <span className="flex items-center justify-center text-[10px]" onClick={
                                                () => {
                                                    localStorage.clear()
                                                    navigate('/')
                                                }
                                            }>Esci</span>
                                        </Button>
                                    </div>
                                </Collapse>

                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Link to="/publish">
                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span className="flex items-center justify-center">Carica immagine <MdAddPhotoAlternate className="ml-1"/></span>
                            </Button>
                        </Link>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Il tuo account</span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationPostLogin