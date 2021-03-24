"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksModule = exports.DEFAULT_LIMIT = exports.DEFAULT_OFFSET = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const webhooks_controller_1 = require("./webhooks.controller");
exports.DEFAULT_OFFSET = '0';
exports.DEFAULT_LIMIT = '10';
let WebhooksModule = class WebhooksModule {
};
WebhooksModule = tslib_1.__decorate([
    common_1.Module({
        imports: [],
        controllers: [webhooks_controller_1.WebhooksController],
        providers: [],
    })
], WebhooksModule);
exports.WebhooksModule = WebhooksModule;
