import { myQApi } from "@hjdhjd/myq";

export class MyQGarage {
    public readonly api: myQApi;
    constructor(email: string, pass: string) {
        this.api = new myQApi(email, pass);
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
        return this.garage.api.devices[0];
    }

    async open(): Promise<boolean> {
        try {
            const res = await this.refresh();
            console.log("Refresh Complete: ", res, "garage: ", this.garage.api);
            if (this.garage.api.devices && this.garage.api.devices.length > 0) {
                console.log("Device Found: ", this.garage.api.devices[0]);
                console.log("Opening Garage Door...");
                return await this.garage.api.execute(this.garage.api.devices[0], "open");
            }
            console.log("No Device Found");
            return await Promise.reject();
        } catch (err) {
            console.log("Error Occured: ", err);
            return await Promise.reject();
        }
    }

    async close(): Promise<boolean> {
        try {
            const res = await this.refresh();
            console.log("Refresh Complete: ", res, "garage:", this.garage.api);
            if (this.garage.api.devices && this.garage.api.devices.length > 0) {
                console.log("Device Found: ", this.garage.api.devices[0]);
                console.log("Closing Garage Door...");
                return await this.garage.api.execute(this.garage.api.devices[0], "close");
            }
            console.log("No Device Found");
            return await Promise.reject();
        } catch (err) {
            console.log("Error Occured: ", err);
            return await Promise.reject();
        }
    }
}