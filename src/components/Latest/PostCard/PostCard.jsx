import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

function PostCard(
    {
        title,
        author,
        cover,
        id,
        description
    }
) {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={cover}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title} di {author}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/skyPosts/${id}`}>
                <Button>Vai al post</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default PostCard