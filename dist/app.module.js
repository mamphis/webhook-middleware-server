"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const domain_events_module_1 = require("./domain-events/domain-events.module");
const publishers_module_1 = require("./publishers/publishers.module");
const webhooks_module_1 = require("./webhooks/webhooks.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb://root:root@mongo:27017/admin'),
            publishers_module_1.PublishersModule,
            webhooks_module_1.WebhooksModule,
            domain_events_module_1.DomainEventsModule,
            event_emitter_1.EventEmitterModule.forRoot(),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsMkNBQThDO0FBQzlDLHlEQUEyRDtBQUMzRCwrQ0FBa0Q7QUFDbEQscURBQWlEO0FBQ2pELCtDQUEyQztBQUMzQywrRUFBMEU7QUFDMUUsc0VBQWtFO0FBQ2xFLGdFQUE0RDtBQWM1RCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUcsQ0FBQTtBQUFaLFNBQVM7SUFackIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIseUJBQWMsQ0FBQyxPQUFPLENBQUMsdUNBQXVDLENBQUM7WUFDL0Qsb0NBQWdCO1lBQ2hCLGdDQUFjO1lBQ2QseUNBQWtCO1lBQ2xCLGtDQUFrQixDQUFDLE9BQU8sRUFBRTtTQUMvQjtRQUNELFdBQVcsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUMsd0JBQVUsQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMifQ==