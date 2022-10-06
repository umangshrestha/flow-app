"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformFindResponse = exports.TransformFindManyResponse = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const tansformPostData = (data) => (Object.assign(Object.assign(Object.assign({}, data), data.faculty), { topic: data.topic.map(x => x.topic) }));
let TransformFindManyResponse = class TransformFindManyResponse {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)(posts => posts.map((x) => tansformPostData(x))));
    }
};
TransformFindManyResponse = __decorate([
    (0, common_1.Injectable)()
], TransformFindManyResponse);
exports.TransformFindManyResponse = TransformFindManyResponse;
let TransformFindResponse = class TransformFindResponse {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((x) => tansformPostData(x)));
    }
};
TransformFindResponse = __decorate([
    (0, common_1.Injectable)()
], TransformFindResponse);
exports.TransformFindResponse = TransformFindResponse;
//# sourceMappingURL=posts.interceptor.js.map