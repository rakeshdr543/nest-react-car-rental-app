import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  providers: [],
  exports: [],
})
export class ComponentsModule {}
