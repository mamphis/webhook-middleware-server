"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
tslib_1.__decorate([
    common_1.Get()
], AppController.prototype, "getHello", null);
AppController = tslib_1.__decorate([
    common_1.Controller('/api')
], AppController);
exports.AppController = AppController;
