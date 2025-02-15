import { Injectable } from "@angular/core";

// @Injectable()

export class LoggerService {
    printLog(value: any) {
        console.log(value);
    }
    printWarn(value: any) {
        console.warn(value);
    }
    printError(value: any) {
        console.error(value);
    }
}