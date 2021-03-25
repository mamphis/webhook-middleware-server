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
    swagger_1.ApiProperty(),
    tslib_1.__metadata("design:type", String)
], PublisherDto.prototype, "name", void 0);
exports.PublisherDto = PublisherDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVyLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wdWJsaXNoZXJzL2R0by9wdWJsaXNoZXIuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2Q0FBOEM7QUFDOUMscURBQXVEO0FBRXZELE1BQWEsWUFBWTtDQUt4QjtBQURHO0lBSEMsMEJBQVEsRUFBRTtJQUNWLDRCQUFVLEVBQUU7SUFDWixxQkFBVyxFQUFFOzswQ0FDUTtBQUoxQixvQ0FLQyJ9