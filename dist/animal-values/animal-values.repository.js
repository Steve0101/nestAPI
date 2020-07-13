"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRepository = void 0;
const animal_values_entity_1 = require("./animal-values.entity");
const typeorm_1 = require("typeorm");
let ValueRepository = class ValueRepository extends typeorm_1.Repository {
    async getValue() {
        const querry = this.createQueryBuilder('Value');
        return await querry.getMany();
    }
    async getById(id) {
        const query = this.createQueryBuilder("Value")
            .where("value.id = id", { id: id });
        return await query.getOne();
    }
    async createValue(createValueDto) {
        const value = new animal_values_entity_1.Value();
        value.id = createValueDto.id;
        value.heigth = createValueDto.heigth;
        value.weigth = createValueDto.weigth;
        value.age = createValueDto.age;
        await value.save();
        return value;
    }
    async updateValue(idValue, createValueDto) {
        const query = this.createQueryBuilder("Value")
            .update(createValueDto)
            .where("id = :id", { id: idValue });
        await query.execute();
        return this.getById(idValue);
    }
    async deleteValueById(idValue) {
        const query = this.createQueryBuilder("Value")
            .delete()
            .where("id = :id", { id: idValue });
        await query.execute();
        return this.getById(idValue);
    }
};
ValueRepository = __decorate([
    typeorm_1.EntityRepository(animal_values_entity_1.Value)
], ValueRepository);
exports.ValueRepository = ValueRepository;
//# sourceMappingURL=animal-values.repository.js.map