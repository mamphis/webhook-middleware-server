"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = tslib_1.__decorate([
    common_1.Controller('/api'),
    tslib_1.__metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUFpRDtBQUNqRCwrQ0FBMkM7QUFHM0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN0QixZQUE2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUd2RCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FDSixDQUFBO0FBSEc7SUFEQyxZQUFHLEVBQUU7Ozs7NkNBR0w7QUFOUSxhQUFhO0lBRHpCLG1CQUFVLENBQUMsTUFBTSxDQUFDOzZDQUUwQix3QkFBVTtHQUQxQyxhQUFhLENBT3pCO0FBUFksc0NBQWEifQ==