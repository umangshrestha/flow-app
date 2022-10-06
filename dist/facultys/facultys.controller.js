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
exports.FacultysController = void 0;
const common_1 = require("@nestjs/common");
const facultys_service_1 = require("./facultys.service");
const create_faculty_dto_1 = require("./dto/create-faculty.dto");
const update_faculty_dto_1 = require("./dto/update-faculty.dto");
const faculty_entity_1 = require("./entities/faculty.entity");
const swagger_1 = require("@nestjs/swagger");
const query_faculty_dto_1 = require("./dto/query-faculty.dto");
const faculty_intercepter_1 = require("./faculty.intercepter");
const transform_faculty_entity_1 = require("./entities/transform-faculty.entity");
const not_found_filter_1 = require("../errors/filter/not-found.filter");
const error_entity_1 = require("../errors/entries/error.entity");
const validation_error_entity_1 = require("../errors/entries/validation-error.entity");
let FacultysController = class FacultysController {
    constructor(service) {
        this.service = service;
    }
    create(createDto) {
        return this.service.create(createDto);
    }
    async findAll(query) {
        return await this.service.findAll(query);
    }
    findOne(uwinID) {
        return this.service.findOne(uwinID);
    }
    update(uwinID, updateDto) {
        return this.service.update(uwinID, updateDto);
    }
    remove(uwinID) {
        return this.service.remove(uwinID);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: faculty_entity_1.FacultyEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faculty_dto_1.CreateFacultyDto]),
    __metadata("design:returntype", void 0)
], FacultysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(faculty_intercepter_1.TransformFindManyResponse),
    (0, swagger_1.ApiBadGatewayResponse)({ type: validation_error_entity_1.ValidationErrorEntity }),
    (0, swagger_1.ApiOkResponse)({ type: transform_faculty_entity_1.FacultyEntityWithCount, isArray: true }),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_faculty_dto_1.QueryFacultyDto]),
    __metadata("design:returntype", Promise)
], FacultysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uwinID'),
    (0, common_1.UseInterceptors)(faculty_intercepter_1.TransformFindResponse),
    (0, common_1.UseFilters)(new not_found_filter_1.PrismaNotFoundExceptionFilter),
    (0, swagger_1.ApiCreatedResponse)({ type: transform_faculty_entity_1.FacultyEntityWithCount }),
    (0, swagger_1.ApiNotFoundResponse)({ type: error_entity_1.ErrorEntity }),
    __param(0, (0, common_1.Param)('uwinID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacultysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':uwinID'),
    (0, swagger_1.ApiCreatedResponse)({ type: faculty_entity_1.FacultyEntity }),
    __param(0, (0, common_1.Param)('uwinID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_faculty_dto_1.UpdateFacultyDto]),
    __metadata("design:returntype", void 0)
], FacultysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uwinID'),
    (0, swagger_1.ApiOkResponse)({ type: faculty_entity_1.FacultyEntity }),
    __param(0, (0, common_1.Param)('uwinID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacultysController.prototype, "remove", null);
FacultysController = __decorate([
    (0, common_1.Controller)('facultys'),
    (0, swagger_1.ApiTags)('facultys'),
    __metadata("design:paramtypes", [facultys_service_1.FacultysService])
], FacultysController);
exports.FacultysController = FacultysController;
//# sourceMappingURL=facultys.controller.js.map