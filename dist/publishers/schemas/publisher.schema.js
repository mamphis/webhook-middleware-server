"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherSchema = exports.Publisher = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let Publisher = class Publisher {
};
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Publisher.prototype, "id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Publisher.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date, required: true, default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], Publisher.prototype, "createdAt", void 0);
Publisher = tslib_1.__decorate([
    mongoose_1.Schema({ versionKey: false })
], Publisher);
exports.Publisher = Publisher;
exports.PublisherSchema = mongoose_1.SchemaFactory.createForClass(Publisher);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wdWJsaXNoZXJzL3NjaGVtYXMvcHVibGlzaGVyLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0NBQStEO0FBTS9ELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FTckIsQ0FBQTtBQVBHO0lBREMsZUFBSSxFQUFFOztxQ0FDSTtBQUdYO0lBREMsZUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDWjtBQUdiO0lBREMsZUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7c0NBQzdDLElBQUk7NENBQUM7QUFSUCxTQUFTO0lBRHJCLGlCQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7R0FDakIsU0FBUyxDQVNyQjtBQVRZLDhCQUFTO0FBV1QsUUFBQSxlQUFlLEdBQUcsd0JBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMifQ==