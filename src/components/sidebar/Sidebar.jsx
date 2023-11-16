import React, {useContext, useEffect, useState} from 'react';
import {Typography} from "@material-tailwind/react";
import {PostsProvider} from "../../context/PostsContext";
import LatestPost from "../Latest/LatestPost/LatestPost";
import ResponsivePagination from "react-responsive-pagination";

const PostSide = ({children}) => {

    const {posts, loading, error, currentPage, setCurrentPage} = useContext(PostsProvider)
    const [search, setSearch] = useState("");

    const [filteredPosts, setFilterPosts] = useState(posts.posts);

    const totalPages = posts.totalPages
    console.log(posts)

    const onClickPagination = (v) => {
        setCurrentPage(v)
        console.log(currentPage)
    }

    useEffect(() => {
        setFilterPosts(
            posts.posts.filter(post =>
                post.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, posts.posts])

    return (

        <div className="mt-6">
            {!loading && !error && posts && posts.posts &&
                <>
                    <div className="flex justify-center items-center w-full flex-col">
                        <Typography variant="h6">Search by posts's name</Typography>
                        <input type="text"
                               name={"title"}
                               className={"rounded-[10px]"}
                               onChange={(e) => setSearch(e.target.value)}/>

                    </div>

                    <div>
                        <LatestPost whatMap={filteredPosts}/>
                        <ResponsivePagination
                            className="pagination"
                            current={currentPage}
                            total={totalPages}
                            onPageChange={onClickPagination}
                        />
                    </div>
                </>
            }
        </div>
    )
}


export default PostSide;
