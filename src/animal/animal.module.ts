import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalRepository } from './animal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalService } from './animal.service';


@Module({
  imports: [TypeOrmModule.forFeature([AnimalRepository])],
  controllers: [AnimalController],
  providers: [AnimalService],
  
})
export class AnimalModule {}
