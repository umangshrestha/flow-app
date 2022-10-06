"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const intiialization_filter_1 = require("./errors/filter/intiialization.filter");
const known_request_filter_1 = require("./errors/filter/known-request.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle(process.env.npm_package_name)
        .setDescription(`The API description`)
        .setVersion(process.env.npm_package_version)
        .build();
    app.useGlobalFilters(new intiialization_filter_1.PrismaClientInitializationFilter);
    app.useGlobalFilters(new known_request_filter_1.PrismaClientKnownRequestFilter);
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map