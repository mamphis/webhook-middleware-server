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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZG9tYWluLWV2ZW50cy9kb21haW4tZXZlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQXdDO0FBQ3hDLCtDQUFrRDtBQUNsRCxtRUFBOEQ7QUFDOUQsdUVBQStFO0FBVy9FLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0NBQUcsQ0FBQTtBQUFyQixrQkFBa0I7SUFUOUIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wseUJBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3RCLEVBQUUsSUFBSSxFQUFFLGlDQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSx1Q0FBaUIsRUFBRTthQUN4RCxDQUFDO1NBQ0w7UUFDRCxXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO0tBQ25DLENBQUM7R0FDVyxrQkFBa0IsQ0FBRztBQUFyQixnREFBa0IifQ==