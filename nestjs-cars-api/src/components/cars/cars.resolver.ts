import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  async cars() {
    return this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  async createCar(@Args('newCarInput') newCarInput: NewCarInput): Promise<Car> {
    return this.carsService.createCar(newCarInput).catch((err) => {
      throw err;
    });
  }
}
