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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePostDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "uwinID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, required: false }),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "isTeams", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, required: false }),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "isMultiple", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: "should be number array with each number representing topic ID."
    }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "topic", void 0);
exports.CreatePostDto = CreatePostDto;
//# sourceMappingURL=connect-post.dto.js.map