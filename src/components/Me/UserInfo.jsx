import React, {useContext} from 'react';
import {UserProvider} from "../../context/UserContext";
import VerticalNav from "../nav/VerticalUserNav";
const UserInfo = () => {
    const {user, setUser, loading, setLoading, error, setError} = useContext(UserProvider);

    return (
        <>
            <VerticalNav />
        </>
    )
}

export default UserInfo