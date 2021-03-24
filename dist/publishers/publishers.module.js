"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersModule = exports.DEFAULT_LIMIT = exports.DEFAULT_OFFSET = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const publishers_controller_1 = require("./publishers.controller");
const publishers_service_1 = require("./publishers.service");
const publisher_schema_1 = require("./schemas/publisher.schema");
exports.DEFAULT_OFFSET = '0';
exports.DEFAULT_LIMIT = '10';
let PublishersModule = class PublishersModule {
};
PublishersModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: publisher_schema_1.Publisher.name, schema: publisher_schema_1.PublisherSchema },
            ]),
        ],
        controllers: [publishers_controller_1.PublishersController],
        providers: [publishers_service_1.PublishersService],
    })
], PublishersModule);
exports.PublishersModule = PublishersModule;
