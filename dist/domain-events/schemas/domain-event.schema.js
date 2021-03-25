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
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], DomainEvent.prototype, "id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, enum: DomainEventType }),
    tslib_1.__metadata("design:type", String)
], DomainEvent.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, enum: DomainEventStatus }),
    tslib_1.__metadata("design:type", String)
], DomainEvent.prototype, "status", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date, required: true, default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], DomainEvent.prototype, "createdAt", void 0);
DomainEvent = tslib_1.__decorate([
    mongoose_1.Schema({ versionKey: false })
], DomainEvent);
exports.DomainEvent = DomainEvent;
exports.DomainEventSchema = mongoose_1.SchemaFactory.createForClass(DomainEvent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4tZXZlbnRzL3NjaGVtYXMvZG9tYWluLWV2ZW50LnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0NBQStEO0FBSy9ELElBQUssaUJBR0o7QUFIRCxXQUFLLGlCQUFpQjtJQUNsQix3Q0FBbUIsQ0FBQTtJQUNuQixvQ0FBZSxDQUFBO0FBQ25CLENBQUMsRUFISSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBR3JCO0FBRUQsSUFBSyxlQUdKO0FBSEQsV0FBSyxlQUFlO0lBQ2hCLGdEQUE2QixDQUFBO0lBQzdCLHdDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFISSxlQUFlLEtBQWYsZUFBZSxRQUduQjtBQUdELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FZdkIsQ0FBQTtBQVZHO0lBREMsZUFBSSxFQUFFOzt1Q0FDSTtBQUdYO0lBREMsZUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7O3lDQUNuQztBQUdiO0lBREMsZUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs7MkNBQ25DO0FBR2Y7SUFEQyxlQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztzQ0FDN0MsSUFBSTs4Q0FBQztBQVhQLFdBQVc7SUFEdkIsaUJBQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztHQUNqQixXQUFXLENBWXZCO0FBWlksa0NBQVc7QUFjWCxRQUFBLGlCQUFpQixHQUFHLHdCQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDIn0=