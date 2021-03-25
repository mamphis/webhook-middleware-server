"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const domain_event_schema_1 = require("./schemas/domain-event.schema");
let DomainEventsService = class DomainEventsService {
    constructor(domainEventModel) {
        this.domainEventModel = domainEventModel;
    }
    async create(event) {
        const newEvent = new this.domainEventModel(event);
        return newEvent.save();
    }
    async findAll(offset, limit) {
        return this.domainEventModel
            .find()
            .skip(parseInt(offset))
            .limit(parseInt(limit))
            .exec();
    }
    async getById(id) {
        const event = await this.domainEventModel
            .findById(id)
            .exec();
        if (!event) {
            throw new common_1.NotFoundException();
        }
        return event;
    }
};
DomainEventsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(domain_event_schema_1.DomainEvent.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model])
], DomainEventsService);
exports.DomainEventsService = DomainEventsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RvbWFpbi1ldmVudHMvZG9tYWluLWV2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBK0Q7QUFDL0QsK0NBQStDO0FBQy9DLHVDQUFpQztBQUNqQyx1RUFHdUM7QUFHdkMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDNUIsWUFFWSxnQkFBNEM7UUFBNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE0QjtJQUNyRCxDQUFDO0lBRUosS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFrQjtRQUMzQixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUN2QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7YUFDdkIsSUFBSSxFQUFFO2FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQVU7UUFDcEIsTUFBTSxLQUFLLEdBQXVCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUN4RCxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsTUFBTSxJQUFJLDBCQUFpQixFQUFFLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0osQ0FBQTtBQTVCWSxtQkFBbUI7SUFEL0IsbUJBQVUsRUFBRTtJQUdKLG1CQUFBLHNCQUFXLENBQUMsaUNBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTs2Q0FDSixnQkFBSztHQUgxQixtQkFBbUIsQ0E0Qi9CO0FBNUJZLGtEQUFtQiJ9