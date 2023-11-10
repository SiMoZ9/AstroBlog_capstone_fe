import { Card, Typography } from "@material-tailwind/react";
import {nanoid} from "nanoid";
import login from "../../views/Login";

const DetailTable = (
    {
        telescope,
        camera,
        filters,
        lat,
        long,
        date,
        constellation,
        ra,
        dec,
    }) => {

    const TABLE_ROWS = [
        {
            telescope: telescope,
            camera: camera,
            filters: filters,
            lat: lat,
            long: long,
            date: date,
            constellation: constellation
        }
    ];

    return (
        <div>
        <Card className="w-[56rem] h-max overflow-scroll">
            <Typography variant="h3" className="text-center m-4">
                Instrumentation
            </Typography>
            <table className="w-full min-w-max table-auto text-center">
                <tbody>
                {TABLE_ROWS.map(({ telescope }, index) => (
                    <tr key={nanoid()} className="even:bg-blue-gray-50/50">
                        <th>
                            <Typography variant="h6">
                                Telescope
                            </Typography>
                        </th>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {telescope}
                            </Typography>
                        </td>
                    </tr>
                ))}

                {TABLE_ROWS.map(({ telescope, camera, filters }, index) => (
                    <tr key={nanoid()} className="even:bg-blue-gray-50/50">
                        <th>
                            <Typography variant="h6">
                                Camera
                            </Typography>
                        </th>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {camera}
                            </Typography>
                        </td>
                    </tr>
                ))}

                {TABLE_ROWS.map(({filters}) => (
                    <tr key={nanoid()} className="even:bg-blue-gray-50/50">
                        <th>
                            <Typography variant="h6">
                                Filters
                            </Typography>
                        </th>
                        <td className="p-4">
                            {filters.narrowband &&
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {filters.narrowband.ha} {'\n'}
                                        {filters.narrowband.oiii} {'\n'}
                                        {filters.narrowband.sii}
                                    </Typography>
                            }

                            {filters.broadband &&
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {filters.broadband.l} {'\n'}
                                    {filters.broadband.r} {'\n'}
                                    {filters.broadband.g} {'\n'}
                                    {filters.broadband.b}
                                </Typography>
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
            <Card className="w-[56rem] h-48 overflow-scroll mt-12">
                <Typography variant="h3" className="text-center">
                    Description
                </Typography>
                <table className="w-full min-w-max table-auto text-center">
                    <tbody>
                    {TABLE_ROWS.map(({ lat, long }, index) => (
                        <tr key={nanoid()} className="even:bg-blue-gray-50/50">
                            <th>
                                <Typography variant="h6">
                                    Coordinates
                                </Typography>
                            </th>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    Lat-Long: {lat} {";"} {long}
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    Ra-Dec: {ra} {";"} {dec}
                                </Typography>
                            </td>
                        </tr>
                    ))}

                    {TABLE_ROWS.map(({ date }, index) => (
                        <tr key={nanoid()} className="even:bg-blue-gray-50/50">
                            <th>
                                <Typography variant="h6">
                                    Date
                                </Typography>
                            </th>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {date}
                                </Typography>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </Card>

        </div>

    );
}

export default DetailTable