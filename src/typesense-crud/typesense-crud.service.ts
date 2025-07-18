import { Injectable } from "@nestjs/common";

@Injectable()
export class TypesenseCrudService {
  resources: any[];
  nextId: number;

  constructor() {
    this.resources = [];  // ✅ initialize array
    this.nextId = 1;      // ✅ initialize ID counter
  }

  create(name: string, id: number) {
    const newResource = {
      id: this.nextId++,
      name: name,
    };
    this.resources.push(newResource); // ✅ use array push
    return newResource;
  }

  findAll() {
    return this.resources;
  }

  findOne(id: number) {
    return this.resources.find(resource => resource.id === id);
  }

  remove(id: number) {
    this.resources = this.resources.filter(resource => resource.id !== id); 
    // if user have the same id it will dellete them (they use  !==) if they use === it will delete all except the one with the given id
    return { message: `Resource with id ${id} deleted.` };
  }

  update(id: number, name: string) {
    const resource = this.resources.find(resource => resource.id === id);
    if (resource) {
      resource.name = name;
      return resource;
    }
    return null;
  }
}
 