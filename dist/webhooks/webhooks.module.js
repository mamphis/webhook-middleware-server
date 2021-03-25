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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9va3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYmhvb2tzL3dlYmhvb2tzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQXdDO0FBQ3hDLCtEQUEyRDtBQUU5QyxRQUFBLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFDckIsUUFBQSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBT2xDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFMMUIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztRQUNqQyxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0dBQ1csY0FBYyxDQUFHO0FBQWpCLHdDQUFjIn0=