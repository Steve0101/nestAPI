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
exports.ValueController = void 0;
const common_1 = require("@nestjs/common");
const animal_values_service_1 = require("./animal-values.service");
const create_value_dto_1 = require("./dto/create-value.dto");
let ValueController = class ValueController {
    constructor(valueService) {
        this.valueService = valueService;
    }
    getValue() {
        return this.valueService.findAll();
    }
    getValueById(id) {
        return this.valueService.getById(id);
    }
    async createValue(createValueDto) {
        return this.valueService.createValue(createValueDto);
    }
    async updateValue(id, createValueDto) {
        return this.valueService.updateValue(id, createValueDto);
    }
    async deleteValue(id) {
        return this.valueService.deleteValue(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ValueController.prototype, "getValue", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValueController.prototype, "getValueById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_value_dto_1.CreateValueDto]),
    __metadata("design:returntype", Promise)
], ValueController.prototype, "createValue", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_value_dto_1.CreateValueDto]),
    __metadata("design:returntype", Promise)
], ValueController.prototype, "updateValue", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValueController.prototype, "deleteValue", null);
ValueController = __decorate([
    common_1.Controller('animal-values'),
    __metadata("design:paramtypes", [animal_values_service_1.ValueService])
], ValueController);
exports.ValueController = ValueController;
//# sourceMappingURL=animal-values.controller.js.map