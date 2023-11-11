import React, {useContext, useState, useEffect} from 'react';
import PostEditComponent from "../components/posts/PostEditComponent";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
const PostEdit = () => {
    return (
        <>
            <NavigationPostLogin/>
            <PostEditComponent />
        </>
    );
};

export default PostEdit;
