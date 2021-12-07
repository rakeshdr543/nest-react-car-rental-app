import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  async cars() {
    return 'Hey my cars resolver';
  }
}
