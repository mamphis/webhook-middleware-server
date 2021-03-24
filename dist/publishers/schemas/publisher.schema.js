"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherSchema = exports.Publisher = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let Publisher = class Publisher {
};
tslib_1.__decorate([
    mongoose_1.Prop()
], Publisher.prototype, "id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true })
], Publisher.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date, required: true, default: Date.now })
], Publisher.prototype, "createdAt", void 0);
Publisher = tslib_1.__decorate([
    mongoose_1.Schema({ versionKey: false })
], Publisher);
exports.Publisher = Publisher;
exports.PublisherSchema = mongoose_1.SchemaFactory.createForClass(Publisher);
