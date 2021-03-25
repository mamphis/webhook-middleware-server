"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let WebhooksController = class WebhooksController {
    async create(webhookPayload) {
        console.log(webhookPayload);
    }
};
tslib_1.__decorate([
    common_1.Post(':publisherId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksController.prototype, "create", null);
WebhooksController = tslib_1.__decorate([
    common_1.Controller('webhooks'),
    swagger_1.ApiTags('Webhooks')
], WebhooksController);
exports.WebhooksController = WebhooksController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9va3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJob29rcy93ZWJob29rcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBOEU7QUFDOUUsNkNBQTBDO0FBSTFDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzNCLEtBQUssQ0FBQyxNQUFNLENBQVMsY0FBbUI7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0osQ0FBQTtBQUhHO0lBRkMsYUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwQixpQkFBUSxDQUFDLG1CQUFVLENBQUMsRUFBRSxDQUFDO0lBQ1YsbUJBQUEsYUFBSSxFQUFFLENBQUE7Ozs7Z0RBRW5CO0FBUFEsa0JBQWtCO0lBRjlCLG1CQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3RCLGlCQUFPLENBQUMsVUFBVSxDQUFDO0dBQ1Asa0JBQWtCLENBUTlCO0FBUlksZ0RBQWtCIn0=