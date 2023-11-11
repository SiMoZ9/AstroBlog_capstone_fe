import React, {useContext} from 'react';
import {Input, Typography} from "@material-tailwind/react";
import {DetailProvider} from "../../context/DetailsContext";
import PostForm from "./PostForm";

const PostEditComponent = () => {

    const {details, setLoading, setError} = useContext(DetailProvider)

    return (
        <>
            <PostForm />
        </>
    );
};

export default PostEditComponent;
