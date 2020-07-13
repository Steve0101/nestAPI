import { Module } from '@nestjs/common';
import { Value } from './animal-values.entity';
import { ValueController } from './animal-values.controller';
import { ValueRepository } from './animal-values.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValueService } from './animal-values.service';


@Module({
  imports: [TypeOrmModule.forFeature([ValueRepository])],
  controllers: [ValueController],
  providers: [ValueService],
  
})
export class ValueModule {}
