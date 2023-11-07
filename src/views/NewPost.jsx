import React, {useEffect, useState} from 'react';
import PostForm from "../components/posts/PostForm";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
import useSession from "../hooks/useSession";
import {useNavigate} from "react-router-dom";
const NewPost = () => {

    const [postForm, setPostForm] = useState({})
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [file, setFile] = useState(null)

    const session = useSession()
    const navigate = useNavigate()

    const onChangeSetFile = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async (cover) => {
        const fileData = new FormData()
        fileData.append('mainPic', cover)

        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/cloudUpload`, {
                method: "POST",
                body: fileData
            })
            return await response.json()
        } catch (error) {
            console.log(error, 'Errore in uploadFile')
        }
    }

    const authString = btoa(`${process.env.REACT_APP_ASTRO_APP_ID}:${process.env.REACT_APP_ASTRO_APP_SECRET}`);
    console.log(authString);

    const params = {
        term: "NGC6960",
    }
    const searchUrl = `${process.env.REACT_APP_ASTRONOMY_API}/search`

    const queryString = `?term=${postForm.object}&match_type=fuzzy`;

    const objFetch = async () => {
        try {
            const res = await fetch(`https://api.astronomyapi.com/api/v2/search${queryString}`, {
                method: 'GET',

                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${authString}`
                },
            })

            const data = await res.json();
            console.log(data)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (!session) navigate('/')
        objFetch()
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setPostForm({
            ...postForm,
            [name]: value,
        })

        console.log(postForm)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (file) {
            console.log(file)
            try {
                console.log(postForm)
                const uploadCover = await uploadFile(file)
                const finalBody = {
                    object: postForm.object,
                    title: postForm.title,
                    mainPic: uploadCover.cover,
                    description: {
                        instrumentation: {
                            telescope: postForm.telescope,
                            camera: postForm.camera,
                            filters: {
                                narrowband: {
                                    ha: postForm.ha,
                                    oiii: postForm.oiii,
                                    sii: postForm.sii
                                },

                                broadband: {
                                    l: postForm.l,
                                    r: postForm.r,
                                    g: postForm.g,
                                    b: postForm.b
                                }
                            }
                        },

                        place: {
                            coordinates: {
                                latitude: postForm.latitude,
                                longitude: postForm.longitude,
                                ra: postForm.ra,
                                dec: postForm.dec,
                                date: postForm.date
                            },
                            constellation: postForm.constellation.toLowerCase().slice(0, 2)
                        },
                    },
                }

                console.log(finalBody)

                setLoading(true)
                await fetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/post/${JSON.parse(localStorage.getItem('loggedInUser'))}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
                    },
                    body: JSON.stringify(finalBody),
                })
                setLoading(false)
            } catch(e) {
                console.log(error)
            }
        } else {
            alert('Carica un file')
            console.error('Carica un file!')
        }

    }


    return (
        <div className="">
            <NavigationPostLogin/>
            <PostForm
                change={handleInputChange}
                submit={handleSubmit}
                onChangeSetFile={onChangeSetFile}
            />
        </div>
    )
}

export default NewPost