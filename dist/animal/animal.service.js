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
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const animal_repository_1 = require("./animal.repository");
const typeorm_1 = require("@nestjs/typeorm");
let AnimalService = class AnimalService {
    constructor(animalRepository) {
        this.animalRepository = animalRepository;
    }
    async findAll() {
        return this.animalRepository.getAnimal();
    }
    async getById(id) {
        return this.animalRepository.getById(id);
    }
    async createAnimal(createAnimalDto) {
        return this.animalRepository.createAnimal(createAnimalDto);
    }
    async updateAnimal(id, createAnimalDto) {
        return this.animalRepository.updateAnimal(id, createAnimalDto);
    }
    async deleteAnimal(id) {
        return this.animalRepository.deleteAnimaltById(id);
    }
};
AnimalService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(animal_repository_1.AnimalRepository)),
    __metadata("design:paramtypes", [animal_repository_1.AnimalRepository])
], AnimalService);
exports.AnimalService = AnimalService;
//# sourceMappingURL=animal.service.js.map