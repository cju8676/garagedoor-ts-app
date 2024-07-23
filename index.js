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
exports.handler = void 0;
const myq_1 = require("./myq");
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const gar = new myq_1.Garage(event.body.email, event.body.pass);
    switch (event.body.cmd) {
        case "open":
            //try {
            console.log(event.body);
            // if (event.body.email && event.body.pass) {
            gar.open()
                .then(res => {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: "Door Opened", garage: gar, res: res })
                };
            })
                .catch(err => {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: "Error Occured", err: err })
                };
            });
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
            console.log(event.body);
            // if (event.body.email && event.body.pass) {
            //const gar = new Garage(event.body.email, event.body.pass);
            gar.close()
                .then(res => {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: "Door Opened", garage: gar, res: res })
                };
            })
                .catch(err => {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: "Error Occured", err: err })
                };
            });
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
});
exports.handler = handler;
