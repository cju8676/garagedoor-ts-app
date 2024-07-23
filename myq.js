"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = exports.MyQGarage = void 0;
const myq_1 = require("@hjdhjd/myq");
class MyQGarage {
    constructor(email, pass) {
        this.api = new myq_1.myQApi(email, pass);
    }
}
exports.MyQGarage = MyQGarage;
class Garage {
    constructor(email, pass) {
        this.garage = new MyQGarage(email, pass);
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Refreshing Devices...");
            yield this.garage.api.refreshDevices();
            return true;
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refresh();
            return this.garage.api.devices[0];
        });
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.refresh();
                console.log("Refresh Complete: ", res, "garage: ", this.garage.api);
                console.log("Opening Garage Door...");
                return yield this.garage.api.execute(this.garage.api.devices[0], "open");
            }
            catch (err) {
                console.log("Error Occured: ", err);
                return yield Promise.reject();
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.refresh();
                console.log("Refresh Complete: ", res, "garage:", this.garage.api);
                console.log("Closing Garage Door...");
                return yield this.garage.api.execute(this.garage.api.devices[0], "close");
            }
            catch (err) {
                console.log("Error Occured: ", err);
                return yield Promise.reject();
            }
            //console.log(this.garage.api.devices[0])
            //return Promise.reject();
        });
    }
}
exports.Garage = Garage;
