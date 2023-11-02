import React, {useEffect} from 'react';
import NavigationBar from "../components/nav/Navigation";
import {Jumbotron} from "../components/jumbo/Jumbotron";
import useSession from "../hooks/useSession";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const session = useSession()
    const navigate = useNavigate()

    useEffect(() => {
        if (session) navigate('/personalHome')
        else navigate('/')
    }, []);


    return (
        <>
            <NavigationBar/>
            <Jumbotron
                title={"Benvenuto in AstroBlog!"}
                subtitle={"Esplora l'universo"}
                buttonText={"Esplora"}
                needButton={true}
            />
        </>
    );
};

export default Home;