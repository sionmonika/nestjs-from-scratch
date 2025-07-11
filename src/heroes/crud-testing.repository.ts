import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudTestingRepository {
  create(data: any) {
    console.log('Creating in repository:', data);
    return { id: Date.now(), ...data };
  }

  findAll() {
    return [{ id: 1, title: 'test', description: 'sample' }];
  }

  findOne(id: number) {
    return { id, title: 'test', description: 'sample' };
  }

  update(id: number, data: any) {
    return { id, ...data };
  }

  remove(id: number) {
    console.log('Removed:', id);
  }
}
