import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { GroupState } from './group.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'group' })
export class GroupStore extends EntityStore<GroupState> {
  constructor() {
    super();
  }
}
