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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPostDto) {
        const { topic, uwinID } = createPostDto, val = __rest(createPostDto, ["topic", "uwinID"]);
        const topics = createPostDto.topic.map((x) => ({ id: x }));
        return this.prisma.post.create({
            data: Object.assign(Object.assign({}, val), { topic: { connect: topics }, faculty: { connect: { uwinID } } })
        });
    }
    findAll({ skip, take, uwinID, isMultiple, isTeams, fromDate, toDate }) {
        return this.prisma.post.findMany({
            skip,
            take,
            where: {
                uwinID, isMultiple, isTeams,
                createdAt: {
                    gte: fromDate,
                    lte: toDate,
                }
            },
            include: {
                faculty: true,
                topic: {
                    select: {
                        topic: true,
                    }
                }
            }
        });
    }
    findOne(id) {
        return this.prisma.post.findUniqueOrThrow({
            where: { id },
            include: {
                faculty: true,
                topic: {
                    select: {
                        topic: true,
                    }
                }
            }
        });
    }
    update(id, updatePostDto) {
        return this.prisma.post.update({ where: { id }, data: updatePostDto });
    }
    remove(id) {
        return this.prisma.post.delete({ where: { id } });
        ;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map