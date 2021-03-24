"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const domain_events_service_1 = require("./domain-events.service");
const domain_event_schema_1 = require("./schemas/domain-event.schema");
let DomainEventsModule = class DomainEventsModule {
};
DomainEventsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: domain_event_schema_1.DomainEvent.name, schema: domain_event_schema_1.DomainEventSchema },
            ]),
        ],
        controllers: [],
        providers: [domain_events_service_1.DomainEventsService],
    })
], DomainEventsModule);
exports.DomainEventsModule = DomainEventsModule;
