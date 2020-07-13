import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AnimalModule } from './animal/animal.module';
import { ValueModule } from './animal-values/animal-values.module';

@Module({
  imports: [ClientModule, TypeOrmModule.forRoot(typeOrmConfig), AnimalModule, ValueModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
