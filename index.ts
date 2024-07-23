import { Garage } from "./myq"

export const handler = async (event: any) => {
    const gar = new Garage(event.body.email, event.body.pass);
    switch (event.body.cmd) {
        case "open":
            //try {
            console.log(event.body)
            // if (event.body.email && event.body.pass) {
            
            gar.open()
                .then(res => {
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ message: "Door Opened", garage: gar, res: res })
                    }
                })
                .catch(err => {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({message: "Error Occured", err: err })
                    }
                })

        // }
        // else {
        //     return {
        //         statusCode: 200,
        //         body: JSON.stringify({ message: "Unable to parse email/pass", eventbody: event.body})
        //     }
        // }
        //}
        //catch (err) {
        //    return {
        //        statusCode: 500,
        //        body: "Error Occured"
        //    }
        //}
        //return;
        case "close":
            //try {
                console.log(event.body)
                // if (event.body.email && event.body.pass) {
                //const gar = new Garage(event.body.email, event.body.pass);
                gar.close()
                .then(res => {
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ message: "Door Opened", garage: gar, res: res })
                    }
                })
                .catch(err => {
                    return {
                        statusCode: 500,
                        body: JSON.stringify({message: "Error Occured", err: err })
                    }
                })

                //return {
                //    statusCode: 200,
                //    body: JSON.stringify({ message: "Door Opened", garage: gar })
                //}
                // }
                // else {
                //     return {
                //         statusCode: 200,
                //         body: JSON.stringify({ message: "Unable to parse email/pass", eventbody: event.body})
                //     }
                // }
            //}
            //catch (err) {
            //    return {
            //        statusCode: 500,
            //        body: "Error Occured"
            //    }
            //}
    }

}