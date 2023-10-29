import React, {useEffect} from 'react';
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import useSession from "../hooks/useSession";
import {useNavigate} from "react-router-dom";

const PersonalHome = () => {

    const session = useSession()
    const navigate = useNavigate()

    useEffect(() => {
        if (!session) navigate('/')
    }, []);

    return (
        <>
            <NavigationPostLogin/>
        </>
    );
};

export default PersonalHome;
