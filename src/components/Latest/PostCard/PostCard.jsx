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
        description,
        linkTo,
        buttonText
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
                    {title}
                </Typography>

                <div className="flex">
                    <img src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1699717106~exp=1699717706~hmac=5467ea3f2c1f93e1c653a6c8bd4f23d1e337588ba2c3cfb1392b119577a54d64"} alt="card-image" className="rounded-full mr-1 w-8 h-8"/>
                    <Link to={"#"}>
                        <Typography variant="h6" color="blue-gray" className="text-blue-600 underline">
                            {author}
                        </Typography>
                    </Link>
                </div>

                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={linkTo}>
                <Button>{buttonText}</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default PostCard