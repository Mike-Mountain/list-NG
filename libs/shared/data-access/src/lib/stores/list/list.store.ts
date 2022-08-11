import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { ListState } from './list.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'list' })
export class ListStore extends EntityStore<ListState> {
  constructor() {
    super();
  }
}
