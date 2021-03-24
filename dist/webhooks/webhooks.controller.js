"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let WebhooksController = class WebhooksController {
    create(webhookPayload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(webhookPayload);
        });
    }
};
tslib_1.__decorate([
    common_1.Post(':publisherId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    tslib_1.__param(0, common_1.Body())
], WebhooksController.prototype, "create", null);
WebhooksController = tslib_1.__decorate([
    common_1.Controller('webhooks'),
    swagger_1.ApiTags('Webhooks')
], WebhooksController);
exports.WebhooksController = WebhooksController;
