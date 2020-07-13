"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalRepository = void 0;
const animal_entity_1 = require("./animal.entity");
const typeorm_1 = require("typeorm");
let AnimalRepository = class AnimalRepository extends typeorm_1.Repository {
    async getAnimal() {
        const querry = this.createQueryBuilder("Animal");
        return await querry.getMany();
    }
    async getById(id) {
        const query = this.createQueryBuilder("Animal")
            .where("animal.id = id", { id: id });
        return await query.getOne();
    }
    async createAnimal(createAnimalDto) {
        const animal = new animal_entity_1.Animal();
        animal.id = createAnimalDto.id;
        animal.name = createAnimalDto.name;
        animal.breed = createAnimalDto.breed;
        await animal.save();
        return animal;
    }
    async updateAnimal(idAnimal, createAnimalDto) {
        const query = this.createQueryBuilder("Animal")
            .update(createAnimalDto)
            .where("id = :id", { id: idAnimal });
        await query.execute();
        return this.getById(idAnimal);
    }
    async deleteAnimaltById(idAnimal) {
        const query = this.createQueryBuilder("Animal")
            .delete()
            .where("id = :id", { id: idAnimal });
        await query.execute();
        return this.getById(idAnimal);
    }
};
AnimalRepository = __decorate([
    typeorm_1.EntityRepository(animal_entity_1.Animal)
], AnimalRepository);
exports.AnimalRepository = AnimalRepository;
//# sourceMappingURL=animal.repository.js.map