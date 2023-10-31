import React, {useEffect, useState} from 'react';
import PostForm from "../components/posts/PostForm";
import NavigationPostLogin from "../components/nav/NavigationPostLogin";
const NewPost = () => {

    const [postForm, setPostForm] = useState({})
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [file, setFile] = useState(null)

    const onChangeSetFile = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async (cover) => {
        const fileData = new FormData()
        fileData.append('mainPic', cover)

        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/blogPosts/upload`, {
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
        objFetch()
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setPostForm({
            ...postForm,
            [name]: value
        })

        console.log(postForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (file) {
            console.log(file)
            try {
                const uploadCover = await uploadFile(file)
                const finalBody = {
                    ...formData,
                    cover: uploadCover.cover
                }

                setLoading(true)
                await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/blogPosts`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(finalBody),
                })
                setLoading(false)

            } catch(e) {
                console.log(error)
            }
        } else {
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