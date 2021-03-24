"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PublisherDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty()
], PublisherDto.prototype, "name", void 0);
exports.PublisherDto = PublisherDto;
