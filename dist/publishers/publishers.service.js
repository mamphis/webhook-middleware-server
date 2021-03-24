"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const publisher_schema_1 = require("./schemas/publisher.schema");
let PublishersService = class PublishersService {
    constructor(publisherModel) {
        this.publisherModel = publisherModel;
    }
    create(publisherDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const publisher = new this.publisherModel(publisherDto);
            return publisher.save();
        });
    }
    findAll(offset, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.publisherModel
                .find()
                .skip(parseInt(offset))
                .limit(parseInt(limit))
                .exec();
        });
    }
    getById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const publisher = yield this.publisherModel
                .findById(id)
                .exec();
            if (!publisher) {
                throw new common_1.NotFoundException();
            }
            return publisher;
        });
    }
    update(id, publisherDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.publisherModel
                .findByIdAndUpdate(id, publisherDto, {
                useFindAndModify: true,
            })
                .then((result) => result);
        });
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.publisherModel.findByIdAndRemove(id);
        });
    }
};
PublishersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(publisher_schema_1.Publisher.name))
], PublishersService);
exports.PublishersService = PublishersService;
