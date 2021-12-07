import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/cars';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  async getAllCars(): Promise<Car[]> {
    return this.carRepository.find().catch(() => {
      throw new InternalServerErrorException();
    });
  }

  async createCar(newCarInput: NewCarInput) {
    // const { name, dailyPrice, monthlyPrice, mileage, gas, gearType } =
    //   newCarInput;

    const newCar = this.carRepository.create(newCarInput);

    await this.carRepository.save(newCar).catch((err) => {
      throw new InternalServerErrorException();
    });

    return newCar;
  }
}
