"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
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
    create(publisherDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.publishersService.create(publisherDto);
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                throw new common_1.NotFoundException();
            }
            return this.publishersService.getById(id);
        });
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
    tslib_1.__param(1, common_1.Query('limit'))
], PublishersController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body())
], PublishersController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id'))
], PublishersController.prototype, "findById", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Body())
], PublishersController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    tslib_1.__param(0, common_1.Param('id'))
], PublishersController.prototype, "delete", null);
PublishersController = tslib_1.__decorate([
    common_1.Controller('publishers'),
    swagger_1.ApiTags('Publishers')
], PublishersController);
exports.PublishersController = PublishersController;
