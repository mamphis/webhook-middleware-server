"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
        }));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Webhook Middleware')
            .setDescription('The API description for internal server of Webhook Middleware')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        yield app.listen(3000);
    });
}
bootstrap();
