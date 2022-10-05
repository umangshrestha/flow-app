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
exports.FacultysService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FacultysService = class FacultysService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFacultyDto) {
        return this.prisma.faculty.create({ data: createFacultyDto });
    }
    findAll(query) {
        const { skip, take, department, faculty } = query;
        return this.prisma.faculty.findMany({
            skip,
            take,
            where: {
                department,
                faculty,
            },
            include: {
                _count: true,
            }
        });
    }
    findOne(uwinID) {
        return this.prisma.faculty.findUniqueOrThrow({
            where: { uwinID }, include: {
                _count: true,
            }
        });
    }
    update(uwinID, updateFacultyDto) {
        return this.prisma.faculty.update({
            where: { uwinID },
            data: updateFacultyDto,
        });
        ;
    }
    remove(uwinID) {
        return this.prisma.faculty.delete({ where: { uwinID } });
        ;
    }
};
FacultysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FacultysService);
exports.FacultysService = FacultysService;
//# sourceMappingURL=facultys.service.js.map