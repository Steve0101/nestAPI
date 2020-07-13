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
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const animal_service_1 = require("./animal.service");
const create_animal_dto_1 = require("./dto/create-animal.dto");
let AnimalController = class AnimalController {
    constructor(animalService) {
        this.animalService = animalService;
    }
    getAnimal() {
        return this.animalService.findAll();
    }
    async createAnimal(createAnimalDto) {
        return this.animalService.createAnimal(createAnimalDto);
    }
    async updateAnimal(id, createAnimalDto) {
        return this.animalService.updateAnimal(id, createAnimalDto);
    }
    async deleteAnimal(id) {
        return this.animalService.deleteAnimal(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "getAnimal", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "createAnimal", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "updateAnimal", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "deleteAnimal", null);
AnimalController = __decorate([
    common_1.Controller('animal'),
    __metadata("design:paramtypes", [animal_service_1.AnimalService])
], AnimalController);
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map