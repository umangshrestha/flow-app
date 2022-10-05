"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const connect_post_dto_1 = require("./dto/connect-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const post_entity_1 = require("./entities/post.entity");
const swagger_1 = require("@nestjs/swagger");
const query_post_dto_1 = require("./dto/query-post.dto");
const posts_interceptor_1 = require("./posts.interceptor");
const transform_post_entity_1 = require("./entities/transform-post.entity");
const not_found_filter_1 = require("../errors/filter/not-found.filter");
const error_entity_1 = require("../errors/entries/error.entity");
const validation_error_entity_1 = require("../errors/entries/validation-error.entity");
let PostsController = class PostsController {
    constructor(service) {
        this.service = service;
    }
    create(createDto) {
        return this.service.create(createDto);
    }
    async findAll(query) {
        return this.service.findAll(query);
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    update(id, updateDto) {
        return this.service.update(+id, updateDto);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: post_entity_1.PostResponseEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [connect_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(posts_interceptor_1.TransformFindManyResponse),
    (0, swagger_1.ApiOkResponse)({ type: transform_post_entity_1.PostGetEntity, isArray: true }),
    (0, swagger_1.ApiBadGatewayResponse)({ type: validation_error_entity_1.ValidationErrorEntity }),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_post_dto_1.QueryPostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(posts_interceptor_1.TransformFindResponse),
    (0, common_1.UseFilters)(new not_found_filter_1.PrismaNotFoundExceptionFilter),
    (0, swagger_1.ApiCreatedResponse)({ type: transform_post_entity_1.PostGetEntity }),
    (0, swagger_1.ApiNotFoundResponse)({ type: error_entity_1.ErrorEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: post_entity_1.PostResponseEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: post_entity_1.PostResponseEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "remove", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, swagger_1.ApiTags)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map