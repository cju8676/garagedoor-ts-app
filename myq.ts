import { myQApi, myQDevice } from "@hjdhjd/myq";


export class MyQGarage {
    public readonly api: myQApi;
    constructor(email: string, pass: string) {
        this.api = new myQApi(email, pass)
    }
}

export class Garage {
    protected readonly garage: MyQGarage;
    constructor(email: string, pass: string) {
        this.garage = new MyQGarage(email, pass);
    }

    async refresh(): Promise<boolean> {
        console.log("Refreshing Devices...");
        await this.garage.api.refreshDevices();
        return true;
    }

    async status(): Promise<any> {
        await this.refresh();
        return this.garage.api.devices[0]
    }

    async open(): Promise<boolean> {
        try {
            const res = await this.refresh();
            console.log("Refresh Complete: ", res, "garage: ", this.garage.api);
            console.log("Opening Garage Door...");
            return await this.garage.api.execute(this.garage.api.devices[0], "open");
        } catch (err) {
            console.log("Error Occured: ", err);
            return await Promise.reject();
        }
    }

    async close(): Promise<boolean> {
        try {
            const res = await this.refresh();
            console.log("Refresh Complete: ", res, "garage:", this.garage.api);
            console.log("Closing Garage Door...");
            return await this.garage.api.execute(this.garage.api.devices[0], "close");
        } catch (err) {
            console.log("Error Occured: ", err);
            return await Promise.reject();
        }
        //console.log(this.garage.api.devices[0])
        //return Promise.reject();
    }
}