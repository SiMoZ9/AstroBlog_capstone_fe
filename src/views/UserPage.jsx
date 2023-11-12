import React, {useContext} from 'react';
import Banner from "../components/UserProfile/Banner";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import UserPost from "../components/UserProfile/UserPost";
import {ProfileProvider} from "../context/ProfileContext";

const UserPage = () => {

    const {profile, loading, error} = useContext(ProfileProvider)

    console.log(profile)

    return (
        <>
            <NavigationPostLogin/>
            {!loading && !error && profile &&
                <>
                    <Banner
                        avatar={profile.userToGet.avatar}
                        userName={profile.userToGet.userName}/>
                    <UserPost/>
                </>
            }
        </>
    );
};

export default UserPage;