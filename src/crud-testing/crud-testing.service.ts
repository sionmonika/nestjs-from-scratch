import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudTesting } from './entities/crud-testing.entity';
import { CreateCrudTestingDto } from './dto/create-crud-testing.dto';
import { UpdateCrudTestingDto } from './dto/update-crud-testing.dto';

@Injectable()
export class CrudTestingService {
  constructor(
    @InjectRepository(CrudTesting)
    private readonly crudTestingRepository: Repository<CrudTesting>,
  ) {}

  async create(createDto: CreateCrudTestingDto): Promise<CrudTesting> {
    const newUser = this.crudTestingRepository.create(createDto);
    return await this.crudTestingRepository.save(newUser);
  }

  async findAll(): Promise<CrudTesting[]> {
    return await this.crudTestingRepository.find({
      relations: ['descriptions'],
    });
  }

  async findOne(id: number): Promise<CrudTesting> {
    const record = await this.crudTestingRepository.findOne({
      where: { id },
      relations: ['descriptions'],
    });
    if (!record) throw new Error(`Record with ID ${id} not found`);
    return record;
  }

  async update(id: number, updateDto: UpdateCrudTestingDto): Promise<CrudTesting> {
    const record = await this.findOne(id);
    const updated = this.crudTestingRepository.merge(record, updateDto);
    return await this.crudTestingRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const record = await this.findOne(id);
    await this.crudTestingRepository.remove(record);
  }
}
