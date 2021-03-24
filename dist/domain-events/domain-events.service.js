"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const domain_event_schema_1 = require("./schemas/domain-event.schema");
let DomainEventsService = class DomainEventsService {
    constructor(domainEventModel) {
        this.domainEventModel = domainEventModel;
    }
    create(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newEvent = new this.domainEventModel(event);
            return newEvent.save();
        });
    }
    findAll(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.domainEventModel
                .find()
                .skip(parseInt(offset))
                .limit(parseInt(limit))
                .exec();
        });
    }
    getById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const event = yield this.domainEventModel
                .findById(id)
                .exec();
            if (!event) {
                throw new common_1.NotFoundException();
            }
            return event;
        });
    }
};
DomainEventsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(domain_event_schema_1.DomainEvent.name))
], DomainEventsService);
exports.DomainEventsService = DomainEventsService;
