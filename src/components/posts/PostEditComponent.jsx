import React, {useContext, useState} from 'react';
import {Input, Typography} from "@material-tailwind/react";
import {DetailProvider} from "../../context/DetailsContext";
import PostForm from "./PostForm";
import {useNavigate, useParams} from "react-router-dom";

const PostEditComponent = () => {

    const {details, loading, setLoading, error, setError} = useContext(DetailProvider)

    const [postForm, setFormData] = useState({})
    const [file, setFile] = useState(null)

    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)

    const uploadFile = async (cover) => {
        const fileData = new FormData()
        fileData.append('mainPic', cover)

        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/cloudUpload`, {
                method: "POST",
                body: fileData
            })
            console.log(fileData)
            return await response.json()
        } catch (error) {
            console.log(error, 'Errore in uploadFile')
        }
    }
    const onChangeSetFile = (e) => {
        setFile(e.target.files[0])
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData({
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
                    ...postForm,
                    mainPic: uploadCover.url
                }

                console.log(finalBody)

                setLoading(true)
                await fetch(`${process.env.REACT_APP_ENDPOINT}/skyPost/edit/${id}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JSON.parse(localStorage.getItem('loggedInUser'))
                    },
                    body: JSON.stringify(finalBody),
                })
                setLoading(false)

            } catch(e) {
                console.log(e)
            }
        } else {
            alert('Carica un file')
            console.error('Carica un file!')
        }
    }

    return (
        <>
            {!loading && !error && details &&
            <PostForm
                header={"Modifica post"}
                isMenuEnabled={false}
                isFileUploadEnabled={true}
                submit={handleSubmit}
                change={handleInputChange}
                onChangeSetFile={onChangeSetFile}
                mainPicPlaceholder={details.mainPic}
                titlePlaceholder={details.title}
                descPlaceholder={details.description.text}
                cameraPlaceholder={details.description.instrumentation.camera}
                constPlaceholder={details.description.place.constellation}
                datePlaceholder={details.description.place.coordinates.date}
                telescopePlaceholder={details.description.instrumentation.telescope}
                latPlaceholder={details.description.place.coordinates.latitude}
                longPlaceholder={details.description.place.coordinates.longitude}
                raPlaceholder={details.description.place.coordinates.ra}
                decPlaceholder={details.description.place.coordinates.dec}
                buttonText={"Modifica post"}
            />
            }
        </>
    );
};

export default PostEditComponent;
