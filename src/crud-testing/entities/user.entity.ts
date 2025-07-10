import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Description } from './description.entity';
import { Profile } from './profile.entity';
import { Role } from './role.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Description, (desc) => desc.user, { cascade: true })
  descriptions!: Description[];

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile!: Profile;

  @ManyToMany(() => Role, { cascade: true })
  @JoinTable()
  roles!: Role[];
}