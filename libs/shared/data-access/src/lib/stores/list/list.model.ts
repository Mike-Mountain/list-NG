import { User } from '../session';
import { Group } from '../group';
import { EntityState } from '@datorama/akita';

export interface ListState extends EntityState<List> {}

export interface List {
  items: ListItem[];
  createdBy: User;
  createdOn: Date;
  image: string;
  group: Group;
}

export interface ListItem {
  title: string;
  complete: boolean;
}
