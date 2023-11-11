import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
const NewsCard = ({title, author, description, url, imageUrl}) => {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={imageUrl}
                    alt="newsImage"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>

                <Typography variant="h6" color="blue-gray" className="mb-2 text-blue-500">
                    {author}
                </Typography>

                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <Link to={url}>
                <CardFooter className="pt-0">
                    <Button>Read More</Button>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default NewsCard;
