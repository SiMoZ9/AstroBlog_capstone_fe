import { Card, Typography } from "@material-tailwind/react";

const TABLE_ROWS = [

];

export function TableWithStripedRows() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <tbody>
                {TABLE_ROWS.map(({ telescope, camera, filters }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {name}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {job}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {date}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                Edit
                            </Typography>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    );
}