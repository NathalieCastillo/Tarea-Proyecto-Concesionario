import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CarsService } from '../service/cars.service';
import { CreateCarDto } from '../dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  finOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.remove(id);
  }
}
