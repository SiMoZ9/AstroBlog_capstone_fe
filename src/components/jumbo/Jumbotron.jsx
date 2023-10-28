import React from 'react';
import {Button, Card, Typography} from "@material-tailwind/react";
export const Jumbotron = () => {
    return (
        <main className="w-screen h-screen">
            <section className="w-screen h-screen relative bg-cover
            after:block
            after:absolute
            after:left-0
            after:top-0
            after:w-full
            after:h-full
            after:opacity-60
            after:bg-[url('https://stsci-opo.org/STScI-01GA6KKWG229B16K4Q38CH3BXS.png')]
            after:bg-cover">
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <Typography variant="h1">
                    Benvenuto in AstroBlog
                </Typography>
                <Button>
                    Esplora
                </Button>
            </div>
            </section>
        </main>
    );
}

