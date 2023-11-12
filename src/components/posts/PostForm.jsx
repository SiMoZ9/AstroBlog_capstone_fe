import {Button, Input, Menu, MenuHandler, MenuItem, MenuList, Textarea, Typography,} from "@material-tailwind/react";
import React, {useState} from "react";

const PostForm = ({
                      change,
                      submit,
                      onChangeSetFile,
                      isFileUploadEnabled,
                      isMenuEnabled,
                      header,
                      mainPicPlaceholder,
                      titlePlaceholder,
                      descPlaceholder,
                      telescopePlaceholder,
                      cameraPlaceholder,
                      filtersBand,
                      constPlaceholder,
                      latPlaceholder,
                      longPlaceholder,
                      raPlaceholder,
                      decPlaceholder,
                      datePlaceholder,
                      buttonText
                  }) => {

    const [catalog, setCatalog] = useState('Seleziona catalogo')
    const [band, setBand] = useState('Banda')

    const bands = [
        'Broadband',
        'Narrowband',
        'Color Camera'
    ]

    const catalogs = [
        'NGC',
        'LBN',
        'HCG',
        'ZWG',
        'HR',
        'IC',
        'UGC',
        'KUG',
        'FCC',
        'DDO',
        'ARP',
        'MGC',
        'ESO'
    ]

    return (
        <div className="flex flex-col items-center justify-center">

            <Typography variant="h1">
                {header}
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" encType="multipart/form-data" onSubmit={submit}>
                <div className="mb-1 flex flex-col gap-6">
                    {
                        isFileUploadEnabled &&
                        <>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Carica un file
                            </Typography>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file"
                                onChange={onChangeSetFile}
                                placeholder={mainPicPlaceholder}
                                name={"mainPic"}
                            />
                        </>
                    }
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Titolo
                    </Typography>
                    <Input
                        size="lg"
                        placeholder={titlePlaceholder}
                        name="title"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />

                    {isMenuEnabled &&
                        <Menu>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Oggetto
                            </Typography>
                            <MenuHandler>
                                <Button
                                    ripple={false}
                                    variant="text"
                                    color="blue-gray"
                                    className="flex h-10 items-center border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                >
                                    {catalog}
                                </Button>
                            </MenuHandler>

                            <Input
                                size="lg"
                                placeholder="NGC6960"
                                name="object"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={change}
                            />

                            <MenuList className="max-h-[20rem] max-w-[18rem]">
                                {catalogs.map(catalogs => {
                                    return (
                                        <MenuItem
                                            value={catalogs}
                                            className="flex items-center gap-2"
                                            onClick={() => setCatalog(catalogs)}
                                        >
                                            <span className="text-center">{catalogs}</span>
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                    }
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Descrizione
                    </Typography>
                    <Textarea
                        size="lg"
                        placeholder="NGC 6960 è una nebulosa..."
                        name={descPlaceholder}
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    >
                    </Textarea>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Telescopio
                    </Typography>
                    <Input
                        size="lg"
                        placeholder={telescopePlaceholder}
                        name="telescope"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Camera
                    </Typography>
                    <Input
                        size="lg"
                        placeholder={cameraPlaceholder}
                        name="camera"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />
                    <Menu placement="bottom-start">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Filtri
                        </Typography>
                        <MenuHandler>
                            <Button
                                ripple={false}
                                variant="text"
                                color="blue-gray"
                                className="flex h-10 items-center border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                            >
                                {band}
                            </Button>
                        </MenuHandler>
                        <MenuList className="max-h-[20rem] max-w-[18rem]">
                            {bands.map(bands => {
                                return (
                                    <MenuItem
                                        value={bands}
                                        className="flex items-center gap-2"
                                        onClick={() => setBand(bands)}
                                    >
                                        {console.log(band)}
                                        <span className="text-center">{bands}</span>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                        {band === "Narrowband" && (
                            <div className="flex justify-center items-center">
                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    Ha
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona Ha"
                                    name="ha"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />
                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    Oiii
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona Oiii"
                                    name="oiii"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />

                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    Sii
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona Sii"
                                    name="sii"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />
                            </div>)}
                        {band === "Broadband" && (
                            <div className="flex justify-center items-center">
                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    L
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona L"
                                    name="l"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />

                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    R
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona R"
                                    name="r"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />
                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    G
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona G"
                                    name="g"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />

                                <Typography variant="h6" color="blue-gray" className="p-4">
                                    B
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Seleziona B"
                                    name="b"
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    onChange={change}
                                />
                            </div>)}

                        {band === "Color Camera" && (
                            <></>
                        )}
                    </Menu>

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Costellazione
                    </Typography>
                    <Input
                        size="lg"
                        name="constellation"
                        placeholder={constPlaceholder}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Posizione di scatto
                    </Typography>


                    <div className="flex justify-center items-center">
                        <Typography variant="h6" color="blue-gray" className="p-4">
                            Lat
                        </Typography>
                        <Input
                            size="lg"
                            placeholder={latPlaceholder}
                            name="latitude"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={change}
                        />

                        <Typography variant="h6" color="blue-gray" className="p-4">
                            Long
                        </Typography>
                        <Input
                            size="lg"
                            placeholder={longPlaceholder}
                            name="longitude"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={change}
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Typography variant="h6" color="blue-gray" className="p-4">
                        Ra
                    </Typography>
                    <Input
                        size="lg"
                        placeholder={raPlaceholder}
                        name="ra"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />

                    <Typography variant="h6" color="blue-gray" className="p-4">
                        Dec
                    </Typography>
                    <Input
                        size="lg"
                        placeholder={decPlaceholder}
                        name="dec"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={change}
                    />
                </div>

                <Typography variant="h6" color="blue-gray" className="p-4">
                    Data
                </Typography>
                <Input
                    size="lg"
                    placeholder={datePlaceholder}
                    name="date"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    onChange={change}
                />

                <div className="flex justify-center mt-5">
                    <Button type="submit">
                        {buttonText}
                    </Button>
                </div>

            </form>
        </div>
    );
}

export default PostForm