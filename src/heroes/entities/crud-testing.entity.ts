import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CrudTesting {
  @PrimaryGeneratedColumn()
  id?: number;

  name?: string;
  description?: string;

  // Add any additional properties or relations as needed
  // For example, if you have a relation to another entity, you can define it here
  // @ManyToOne(() => AnotherEntity, (anotherEntity) => anotherEntity.crudTestings)
  // anotherEntity!: AnotherEntity;
};