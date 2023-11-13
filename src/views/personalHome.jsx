import React, {useEffect} from 'react';
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import useSession from "../hooks/useSession";
import {useNavigate} from "react-router-dom";
import {Jumbotron} from "../components/jumbo/Jumbotron";
import LatestPost from "../components/Latest/LatestPost/LatestPost";
import LatestNews from "../components/Latest/LatestNews/LatestNews";

const PersonalHome = () => {

    const session = useSession()
    const navigate = useNavigate()

    useEffect(() => {
        if (!session) navigate('/')
    }, []);

    return (
        <>
            <NavigationPostLogin/>
            <Jumbotron
                title={"Ultimi post"}
                needButton={false}
            />
            <div className="p-8">
            <LatestPost />
            </div>
            <Jumbotron
                title={"Ultime notizie dallo spazio"}
                needButton={false}
            />
            <LatestNews />
        </>
    );
};

export default PersonalHome;
