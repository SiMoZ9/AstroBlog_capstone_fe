import React from 'react';
import PostSide from "../components/sidebar/Sidebar";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";

const AllPosts = () => {
    return (
        <>
            <NavigationPostLogin/>

            <PostSide/>
        </>
    );
};

export default AllPosts;
