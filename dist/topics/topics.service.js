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
exports.TopicsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TopicsService = class TopicsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createTopicDto) {
        return this.prisma.topic.create({ data: createTopicDto });
    }
    findAll(query) {
        return this.prisma.topic.findMany(Object.assign(Object.assign({}, query), { include: {
                _count: true,
            } }));
    }
    findOne(id) {
        return this.prisma.topic.findUniqueOrThrow({
            where: { id },
            include: {
                _count: true,
            }
        });
    }
    update(id, updateTopicDto) {
        return this.prisma.topic.update({
            where: { id },
            data: updateTopicDto,
        });
    }
    remove(id) {
        return this.prisma.topic.delete({ where: { id } });
        ;
    }
};
TopicsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TopicsService);
exports.TopicsService = TopicsService;
//# sourceMappingURL=topics.service.js.map