"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const publisher_schema_1 = require("./schemas/publisher.schema");
let PublishersService = class PublishersService {
    constructor(publisherModel) {
        this.publisherModel = publisherModel;
    }
    async create(publisherDto) {
        const publisher = new this.publisherModel(publisherDto);
        return publisher.save();
    }
    async findAll(offset, limit) {
        return this.publisherModel
            .find()
            .skip(parseInt(offset))
            .limit(parseInt(limit))
            .exec();
    }
    async getById(id) {
        const publisher = await this.publisherModel
            .findById(id)
            .exec();
        if (!publisher) {
            throw new common_1.NotFoundException();
        }
        return publisher;
    }
    async update(id, publisherDto) {
        return this.publisherModel
            .findByIdAndUpdate(id, publisherDto, {
            useFindAndModify: true,
        })
            .then((result) => result);
    }
    async delete(id) {
        this.publisherModel.findByIdAndRemove(id);
    }
};
PublishersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(publisher_schema_1.Publisher.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model])
], PublishersService);
exports.PublishersService = PublishersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1Ymxpc2hlcnMvcHVibGlzaGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBK0Q7QUFDL0QsK0NBQStDO0FBQy9DLHVDQUFpQztBQUVqQyxpRUFBMEU7QUFHMUUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDMUIsWUFFWSxjQUF3QztRQUF4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7SUFDakQsQ0FBQztJQUVKLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBMEI7UUFDbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQWMsRUFBRSxLQUFhO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDckIsSUFBSSxFQUFFO2FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQVU7UUFDcEIsTUFBTSxTQUFTLEdBQXFCLE1BQU0sSUFBSSxDQUFDLGNBQWM7YUFDeEQsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNaLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE1BQU0sSUFBSSwwQkFBaUIsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBVSxFQUFFLFlBQTBCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDckIsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRTtZQUNqQyxnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFZLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVU7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0osQ0FBQTtBQXhDWSxpQkFBaUI7SUFEN0IsbUJBQVUsRUFBRTtJQUdKLG1CQUFBLHNCQUFXLENBQUMsNEJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTs2Q0FDSixnQkFBSztHQUh4QixpQkFBaUIsQ0F3QzdCO0FBeENZLDhDQUFpQiJ9