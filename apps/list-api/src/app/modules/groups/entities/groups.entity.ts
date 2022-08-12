import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../authentication/entities/user.entity';

@Entity('groups')
export class GroupsEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => UserEntity, (user) => user.groups, { cascade: true })
  @JoinTable()
  users: string[];
}
