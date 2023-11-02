import React from 'react';
import {Button,Typography} from "@material-tailwind/react";
export const Jumbotron = ({title, subtitle, buttonText, needButton}) => {
    return (
        <main>
            <section className="bg-center bg-cover bg-no-repeat bg-[url('https://www.eso.org/public/archives/images/screen/eso0932a.jpg')] bg-gray-700 bg-blend-soft-light">
                <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-64">
                    <div className="flex flex-col items-center">
                    <Typography variant="h1" color="white">{title}</Typography>
                    <Typography variant="lead" color="white">{subtitle}</Typography>
                        {needButton && <Button className="bg-blue-gray-900 mt-1">
                                                {buttonText}
                                            </Button>
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}
