import React, {useEffect, useState} from 'react';
import {Checkbox, Input, Typography} from "@material-tailwind/react";
import {useFetch} from "../../hooks/useFetch";

const PostSide = () => {

    const [post, setPosts] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = useFetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/all`, {
        headers: {
            "Content-type": 'application/json',
            "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
        }
    })

    useEffect(() => {
        setLoading(true)
        fetchData.then((res) => {
            setPosts(res)
            console.log(post.posts)
        })
            .catch((err) => {
                console.log(err)
            })
        setLoading(false)
    }, []);

    return (

        <div>
            {!loading && !error && post && post.posts &&
                <aside id="sidebar-multi-level-sidebar"
                       className="z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
                       aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 divide-y">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Typography variant="h6">Search by post's name</Typography>
                                <Input
                                    size="lg"
                                    name="title"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-blue_gray-10 rounded-[10px]"/>
                                <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </li>
                            <li>
                                <Typography variant={"h6"}>
                                    Telescopes
                                </Typography>
                                <ul>
                                    {post.posts.map(post => (
                                        <li className="flex items-center">
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.telescope)}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </li>

                            <li>
                                <Typography variant={"h6"}>
                                    Cameras
                                </Typography>
                                <ul>
                                    {post.posts.map(post => (
                                        <li className="flex items-center">
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.camera)}</Typography>
                                        </li>
                                    ))}
                                    <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 opacity-100 dark:opacity-50" />
                                </ul>
                            </li>

                            <li>
                                <Typography variant={"h6"}>
                                    Narrowband filters
                                </Typography>
                                <ul>
                                    {post.posts.map(post => (
                                        <li className="flex">
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.ha)}</Typography>
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.oiii)}</Typography>
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.sii)}</Typography>
                                        </li>
                                    ))}
                                    <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 opacity-100 dark:opacity-50" />
                                </ul>
                            </li>
                            <li>
                                <Typography variant={"h6"}>
                                    Broadband filters
                                </Typography>
                                <ul>
                                    {post.posts.map(post => (
                                        <li className="flex flex-col">
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.broadband.l)}</Typography>
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.r)}</Typography>
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.g)}</Typography>
                                            <Checkbox type={"checkbox"}/>
                                            <Typography variant="h6"
                                                        className="text-[14px] ml-2">{(post.description.instrumentation.filters.narrowband.b)}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </li>
                        </ul>
                    </div>
                </aside>
            }
        </div>
    );
};

export default PostSide;
