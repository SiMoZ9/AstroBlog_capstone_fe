import React, {useState, useEffect, useContext} from "react";
import {useFetch} from "../../hooks/useFetch";
import PostCard from "../Latest/PostCard/PostCard";
import {DetailProvider} from "../../context/DetailsContext";

const MyPosts = () => {

    const {details} = useContext(DetailProvider);

    return (
        <>
            <PostCard />
        </>
    )
}

export default MyPosts