import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Group } from '@list-ng/shared/data-access';
import { GroupsEntity } from '../../groups/entities/groups.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @ManyToMany((type) => GroupsEntity, (group) => group.users)
  groups: Group[];
}
