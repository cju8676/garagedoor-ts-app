import { Garage } from "./myq";

export const handler = async (event: any) => {
    const gar = new Garage(event.body.email, event.body.pass);
    try {
        let res;
        if (event.body.cmd === "open") {
            res = await gar.open();
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Door Opened", garage: gar, res: res })
            };
        } else if (event.body.cmd === "close") {
            res = await gar.close();
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Door Closed", garage: gar, res: res })
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid command" })
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error Occurred", err: err })
        };
    }
};