import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { join } from 'path';
import { CrudTesting } from './crud-testing.entity';

@Entity()
export class Description {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @ManyToOne(() => CrudTesting, (crudTesting) => crudTesting.descriptions, {
    onDelete: 'CASCADE', // Add this for proper cascade deletion
    nullable: true       // Make nullable if descriptions can exist without parent
  })
  crudTesting!: CrudTesting;
  user: any;
}