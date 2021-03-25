"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const publisher_dto_1 = require("./dto/publisher.dto");
const publishers_service_1 = require("./publishers.service");
const mongoose_1 = require("mongoose");
const publishers_module_1 = require("./publishers.module");
const swagger_1 = require("@nestjs/swagger");
let PublishersController = class PublishersController {
    constructor(publishersService) {
        this.publishersService = publishersService;
    }
    findAll(offset = publishers_module_1.DEFAULT_OFFSET, limit = publishers_module_1.DEFAULT_LIMIT) {
        return this.publishersService.findAll(offset, limit);
    }
    async create(publisherDto) {
        return this.publishersService.create(publisherDto);
    }
    async findById(id) {
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            throw new common_1.NotFoundException();
        }
        return this.publishersService.getById(id);
    }
    update(publisherId, publisherDto) {
        return this.publishersService.update(publisherId, publisherDto);
    }
    delete(id) {
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            return;
        }
        this.publishersService.delete(id);
        return;
    }
};
tslib_1.__decorate([
    common_1.Get(),
    swagger_1.ApiQuery({ name: 'offset', required: false }),
    swagger_1.ApiQuery({ name: 'limit', required: false }),
    tslib_1.__param(0, common_1.Query('offset')),
    tslib_1.__param(1, common_1.Query('limit')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublishersController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [publisher_dto_1.PublisherDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PublishersController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PublishersController.prototype, "findById", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, publisher_dto_1.PublisherDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PublishersController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], PublishersController.prototype, "delete", null);
PublishersController = tslib_1.__decorate([
    common_1.Controller('publishers'),
    swagger_1.ApiTags('Publishers'),
    tslib_1.__metadata("design:paramtypes", [publishers_service_1.PublishersService])
], PublishersController);
exports.PublishersController = PublishersController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVycy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1Ymxpc2hlcnMvcHVibGlzaGVycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FZd0I7QUFDeEIsdURBQW1EO0FBQ25ELDZEQUF5RDtBQUV6RCx1Q0FBaUM7QUFDakMsMkRBQW9FO0FBQ3BFLDZDQUFvRDtBQUlwRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUM3QixZQUE2QixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFLckUsT0FBTyxDQUNjLFNBQWlCLGtDQUFjLEVBQ2hDLFFBQWdCLGlDQUFhO1FBRTdDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdELEtBQUssQ0FBQyxNQUFNLENBQVMsWUFBMEI7UUFDM0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFHRCxLQUFLLENBQUMsUUFBUSxDQUFjLEVBQVU7UUFDbEMsSUFBSSxDQUFDLGdCQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM3QixNQUFNLElBQUksMEJBQWlCLEVBQUUsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QsTUFBTSxDQUNXLFdBQW1CLEVBQ3hCLFlBQTBCO1FBRWxDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlELE1BQU0sQ0FBYyxFQUFVO1FBQzFCLElBQUksQ0FBQyxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxPQUFPO0lBQ1gsQ0FBQztDQUNKLENBQUE7QUFyQ0c7SUFIQyxZQUFHLEVBQUU7SUFDTCxrQkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDN0Msa0JBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBRXhDLG1CQUFBLGNBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNmLG1CQUFBLGNBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTs7OzttREFHbEI7QUFHRDtJQURDLGFBQUksRUFBRTtJQUNPLG1CQUFBLGFBQUksRUFBRSxDQUFBOzs2Q0FBZSw0QkFBWTs7a0RBRTlDO0FBR0Q7SUFEQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ0ssbUJBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O29EQUsxQjtBQUdEO0lBREMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUVOLG1CQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNYLG1CQUFBLGFBQUksRUFBRSxDQUFBOztxREFBZSw0QkFBWTs7a0RBR3JDO0FBSUQ7SUFGQyxlQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2IsaUJBQVEsQ0FBQyxtQkFBVSxDQUFDLFVBQVUsQ0FBQztJQUN4QixtQkFBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7a0RBTWxCO0FBMUNRLG9CQUFvQjtJQUZoQyxtQkFBVSxDQUFDLFlBQVksQ0FBQztJQUN4QixpQkFBTyxDQUFDLFlBQVksQ0FBQzs2Q0FFOEIsc0NBQWlCO0dBRHhELG9CQUFvQixDQTJDaEM7QUEzQ1ksb0RBQW9CIn0=