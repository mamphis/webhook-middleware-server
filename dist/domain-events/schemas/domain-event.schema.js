"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventSchema = exports.DomainEvent = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
var DomainEventStatus;
(function (DomainEventStatus) {
    DomainEventStatus["Success"] = "success";
    DomainEventStatus["Error"] = "error";
})(DomainEventStatus || (DomainEventStatus = {}));
var DomainEventType;
(function (DomainEventType) {
    DomainEventType["Received"] = "received_message";
    DomainEventType["Sent"] = "sent_message";
})(DomainEventType || (DomainEventType = {}));
let DomainEvent = class DomainEvent {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: 'uuid' })
], DomainEvent.prototype, "id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, type: 'string', enum: DomainEventType })
], DomainEvent.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, enum: DomainEventStatus })
], DomainEvent.prototype, "status", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date, required: true, default: Date.now })
], DomainEvent.prototype, "createdAt", void 0);
DomainEvent = tslib_1.__decorate([
    mongoose_1.Schema({ versionKey: false })
], DomainEvent);
exports.DomainEvent = DomainEvent;
exports.DomainEventSchema = mongoose_1.SchemaFactory.createForClass(DomainEvent);
