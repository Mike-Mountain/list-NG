import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { GroupStore } from './group.store';
import { GroupState } from './group.model';

@Injectable({ providedIn: 'root' })
export class GroupService extends NgEntityService<GroupState> {
  constructor(override store: GroupStore) {
    super(store);
  }
}
