import React, {useContext} from 'react';
import Banner from "../components/UserProfile/Banner";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import UserPost from "../components/UserProfile/UserPost";
import {ProfileProvider} from "../context/ProfileContext";
import UserIntruments from "../components/UserProfile/UserIntruments";

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
                        headerImg={profile.userToGet.header}
                        userName={profile.userToGet.userName}/>

                    <div className="p-8">
                        <UserPost/>
                    </div>

                    <UserIntruments

                    />
                </>
            }
        </>
    );
};

export default UserPage;