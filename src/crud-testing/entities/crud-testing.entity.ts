// crud-testing.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Description } from './description.entity';
import { Profile } from './profile.entity';
import { Role } from './role.entity';

@Entity()
export class CrudTesting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Description, (description) => description.crudTesting, {
    cascade: true,
  })
  descriptions!: Description[];

  @OneToOne(() => Profile, (profile) => profile.crudTesting, {
    cascade: true,
  })
  @JoinColumn()
  profile!: Profile;

  @ManyToMany(() => Role, (role) => role.crudTestings, {
    cascade: true,
  })
  @JoinTable()
  roles!: Role[];
}