import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GroupStore } from './group.store';
import { GroupState } from './group.model';

@Injectable({ providedIn: 'root' })
export class GroupQuery extends QueryEntity<GroupState> {
  constructor(override store: GroupStore) {
    super(store);
  }
}
