"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
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
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyw2Q0FBaUU7QUFDakUsNkNBQXlDO0FBRXpDLEtBQUssVUFBVSxTQUFTO0lBQ3BCLE1BQU0sR0FBRyxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsc0JBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxjQUFjLENBQ2QsSUFBSSx1QkFBYyxDQUFDO1FBQ2YsU0FBUyxFQUFFLElBQUk7S0FDbEIsQ0FBQyxDQUNMLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFlLEVBQUU7U0FDL0IsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1NBQzlCLGNBQWMsQ0FDWCwrREFBK0QsQ0FDbEU7U0FDQSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ2pCLEtBQUssRUFBRSxDQUFDO0lBQ2IsTUFBTSxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNELHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyJ9