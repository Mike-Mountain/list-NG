import { User } from '../session';
import { List } from '../list';
import { EntityState } from '@datorama/akita';

export interface GroupState extends EntityState<Group> {}

export interface Group {
  name: string;
  users: User[];
  lists: List[];
}
