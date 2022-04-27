import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientDto } from './dto/patient.dto';

@Controller('patients')
export class PatientsController {
  @HttpCode(200)
  @Get()
  async findAll(): Promise<any> {
    return 'findAll';
  }

  @HttpCode(200)
  @Get(':id')
  async findOne(id: string): Promise<any> {
    return 'findOne';
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: PatientDto): Promise<any> {
    return 'create';
  }

  @Patch(':id')
  async update(@Body() dto: PatientDto, @Param() id: string): Promise<any> {
    return 'update';
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<any> {
    return 'delete';
  }
}
