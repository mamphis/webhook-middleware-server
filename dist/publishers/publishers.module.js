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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaGVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHVibGlzaGVycy9wdWJsaXNoZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQXdDO0FBQ3hDLCtDQUFrRDtBQUNsRCxtRUFBK0Q7QUFDL0QsNkRBQXlEO0FBQ3pELGlFQUF3RTtBQUUzRCxRQUFBLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFDckIsUUFBQSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBV2xDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUcsQ0FBQTtBQUFuQixnQkFBZ0I7SUFUNUIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wseUJBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3RCLEVBQUUsSUFBSSxFQUFFLDRCQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQ0FBZSxFQUFFO2FBQ3BELENBQUM7U0FDTDtRQUNELFdBQVcsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO0tBQ2pDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztBQUFuQiw0Q0FBZ0IifQ==